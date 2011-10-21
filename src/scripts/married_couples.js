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

function find_married_couples() {
    var marriedCouples = new Array();
    var marriedCouplesIndex = 0;
    var marriageDays = 0

    $(".count").each(function(index, value) {
        var days = parseInt(value.innerHTML);
        $(value).parent().css("background-color", "#FF9900");
        $(value).css("color", "black");
        $(value).css("text-shadow", "5px 1px 5px white");

        if (days > marriageDays) {
            marriageDays = days;
            marriedCouples = new Array();
            marriedCouples[0] = value;
            marriedCouplesIndex = 1;
        } else if (days > 0 && days == marriageDays) {
            marriedCouples[marriedCouplesIndex++] = value;
        }

    });

    if (marriageDays > 0) {
        clear_existing_married_couples();

        $(marriedCouples).each(function(coupleIndex, couple) {
            $(couple).parent().css("background-color", "#FF0099")
            $(couple).css("color", "white")
            $(couple).css("text-shadow", "5px 1px 5px black");

            var left_person = $(couple).parent().siblings(".left_name").text();
            var index = $(couple).parent().index();
            var top_person = $("#top_row_names").children()[index];

            var cloned = $(".clone_row").clone();
            $(cloned).removeClass("clone_row");
            $(cloned).html(left_person + " - " + $(top_person).find(".dev_name").text() + " - " + $(couple).text());
            if (coupleIndex > 4) {
                $(cloned).addClass("hidden");
            }

            $(cloned).insertBefore($(".clone_row"))

        });

    }

    if ($(marriedCouples).length > 5) {
        $("#married_couples .more").removeClass("hidden")
        $("#married_couples .more input").attr("value", "List All");
    }
    else {
        $("#married_couples .more").addClass("hidden")

    }

}

function clear_existing_married_couples() {
    $("#married_couples").children().each(function(index, node) {
        if (!$(node).hasClass("title") && !$(node).hasClass("clone_row") && !$(node).hasClass("more")) {
            $(node).remove();
        }
    });

    $("#married_couples .more").addClass("hidden")

}

function list_all_married_couples() {
    var input = $("#married_couples .more input");
    if ($(input).attr("value") == "List All") {
        $(input).attr("value", "Hide")
    } else {
        $(input).attr("value", "List All")
    }

    $("#married_couples .hidden").slideToggle({});

}