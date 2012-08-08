/*
 Copyright 2012 Michael Rylander

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

$(document).ready(function() {
        populatePeopleList()
    }
);

function populatePeopleList() {
    var data = persistedDevNameList.getData();
    if (data != null) {
        $(data).each(function(index, pairName) {
            addPersonFieldWithPersonNamed(pairName);
        });
        $('.person').last().remove();
    }
}

function addNewPersonField() {
    var newInputField = addPerson('');
//    newInputField.prop('disabled', false);
    makeFieldEditable($(newInputField).siblings('.person_edit_button'));
    newInputField.focus();
};

function addPersonFieldWithPersonNamed(devName) {
    var newInputField = addPerson(devName);
};

function addPerson(personName) {
    var lastElement = $('.person').first();
    var clonedDiv = lastElement.clone();
    $(clonedDiv).insertBefore(lastElement);
    var newInputField = $(clonedDiv).find('input[type="text"]');
    newInputField.val(personName);
    return newInputField;
}

function savePeople(){
    var people = $('.developer_names_form').find('input[type="text"]');
    var peopleList = new Array();
    $(people).each(function () {
        var person = this.value.trim();
        if (!(person == "")) {
            peopleList.push(person);
        }
    })
    peopleList.sort()
    persistedDevNameList.setData(peopleList);
    window.location.href = "pairStair.html";
}

function makeFieldEditable(button){
    $(button).siblings('input.person_name').prop('disabled', false);
    $(button).addClass('invisibleSpacer');
}

function removeField(button){
    if(confirm("Are you sure you wish to remove this person?")){
        $(button).closest('div').remove();
    }
}
