/*
    Copyright 2011 Michael Rylander

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    Description of Purpose: js for pair ladder
*/

function clear_existing_divorced_people() {
    unhighlight_divorced();
    $("#divorced_people").children().each(function(index, node) {
        if (!$(node).hasClass("title") && !$(node).hasClass("divorce_clone_row") && !$(node).hasClass("more")) {
            $(node).remove();
        }
    });

}

function find_divorced_people() {
    clear_existing_divorced_people();

    var rows = $("#pair_ladder_table tr");
    var columns = $("#pair_ladder_table tr");
    var map = {};
    var maxCount = 0;
    var minCount = 10000;

    $(rows).each(function(index, row) {
        var count = 0;
        var developerName;

        if (index > 0) {
            developerName = $($(rows).get(index)).children(".left_name").text();

            $(row).find(".count").each(function (rowIndex, rowCount) {
                count += parseInt($(rowCount).text());
            });

            $(columns).each(function (i, column) {
                if (i > 0) {
                    var countColumnBlock = $(column).children().get(index);
                    if ($(countColumnBlock).hasClass("count_td")) {
                        count += parseInt($(countColumnBlock).children(".count").text());
                    }
                }
            });

            if (count > maxCount) maxCount = count;
            if (count < minCount) minCount = count;

            var existingDevelopers = map[count];

            if (existingDevelopers != null) {
                existingDevelopers[existingDevelopers.length] = developerName;
                map[count] = existingDevelopers;
            } else {
                map[count] = [developerName];
            }
        }

    });

    var upperCut = parseFloat((maxCount - minCount) * .7);

    for (var count in map) {
        var divorcedPeople = map[count];
        if (count < upperCut) {
            $(divorcedPeople).each(function (index, divorced) {
                var cloneDivorceRow = $(".divorce_clone_row").clone();
                $(cloneDivorceRow).removeClass("divorce_clone_row");
                $(cloneDivorceRow).text(divorced + " - " + (maxCount - count) + " / " + count);
                $(cloneDivorceRow).insertBefore($(".divorce_clone_row"));

                highlight_divorced(divorced);
            });

        }
    }

    init_divorced_hover_animation()
}

function highlight_divorced(name) {
    $("#top_row_names").children().each(function(index, node) {
        if ($(node).text() == name) {
            $(node).addClass("red_background_color")
        }
    });
}


function unhighlight_divorced() {
    $("#top_row_names").children().each(function(index, node) {
        $(node).removeClass("red_background_color")
    });
}
