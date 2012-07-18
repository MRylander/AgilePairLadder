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

const FALSE = -1;

function clear_form_data() {
    $('.developer_names_form :input').each(function() {
        if (this.type == 'text') $(this).val("")
    });

    $('.remove_developer').live('click', remove_developer)

    $("#add_another_developer").click(add_another_developer)

    $("#submit_developers_list_button").click(submit_developer_names)
}

var submit_developer_names = function () {
    var developerNames = $('#modal .developer_names_form').find('input[type="text"]');

    var developerNamesList = new Array();

    $(developerNames).each(function () {
        var developerName = this.value.trim();
        if (!(developerName == "")) {
            developerNamesList.push(developerName);
        }
    })

    if (developerNamesList.length > 0) {
        devNameList.setData(developerNamesList);
        hide_modal();
        location.reload()
    }
}

var remove_developer = function() {
	var count = $('.developer_name').length - 1;
	if( count > 1 ){
    $(this).parent().remove()
   }
};

var add_another_developer = function() {
	var firstElem = $('.developer_name:first');
    var clonedDiv = firstElem.clone();
    $(clonedDiv).insertBefore( firstElem );
    var newInput = $(clonedDiv).find('input[type="text"]');
    newInput.val("").focus();
};


function add_new_developer() {
    var newDevName = $('#add_new_dev_modal .developer_name').find('input[type="text"]')[0].value;
    var devNames = read_cookie(dev_names_cookie_names);
    var newDevNamesList = "";

    $(devNames).each(function(index, value) {
        newDevNamesList += value + ",";
    });

    newDevNamesList += newDevName;
    devNameList.setData(newDevNamesList);

    location.reload();

}

function remove_a_dev(dev) {
    var devToBeRemoved = $(dev).siblings(".dev_name").text();

    removeDevFromDevNamesCookie(devToBeRemoved);
    removeDevFromPairCookie(devToBeRemoved);

    location.reload();
}

function removeDevFromDevNamesCookie(devToBeRemoved) {
    var originalDevNames = read_cookie(dev_names_cookie_names);
    var newDevNames = new Array();

    $(originalDevNames).each(function(index, devName) {
        if (devName != devToBeRemoved) {
            newDevNames.push(devName);
        }
    });

    devNameList.setData(newDevNames);
}
function removeDevFromPairCookie(devToBeRemoved) {
    var originalPairingData = read_cookie(pair_cookie_name);
    var newPairingData = new Array();

    $(originalPairingData).each(function(index, pairData) {
        var pairNames = pairData.split("-", 2);

        if ($.inArray(devToBeRemoved, pairNames) == FALSE){
            newPairingData.push(pairData);
        }
    });

    pairingDataList.setData(newPairingData);
}
