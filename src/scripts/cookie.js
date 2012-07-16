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
    Modified by Akshay  Jawharkar
*/

var pair_cookie_name = "pair_cookie";
var dev_names_cookie_names = "dev_names_cookie"

function update_dev_names_cookie(data) {
    document.cookie = dev_names_cookie_names + "=" + data + "; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
}

function update_pair_cookie(data) {
    document.cookie = pair_cookie_name + "=" + data + "; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
}

function read_cookie(cookieName) {
    if (document.cookie) {
        var index = document.cookie.indexOf(cookieName);
        if (index != -1) {
            countbegin = (document.cookie.indexOf("=", index) + 1);
            countend = document.cookie.indexOf(";", index);
            if (countend == -1) {
                countend = document.cookie.length;
            }
            var data = document.cookie.substring(countbegin, countend);
            return data == null ? null : data.split(",");
        }
    }

}

function create_and_write_data_to_cookie(pairToModify, newValue) {
    var oldPairingData = read_cookie(pair_cookie_name);
    var newPairingData = new Array();
    var matchingPairFound = false;

    $(oldPairingData).each(function(index, pairData) {
        var pairNames = pairData.slice(0, -2);
        if (pairNames == pairToModify) {
            matchingPairFound = true;
            newPairingData.push(pairNames + "-" + newValue);
            return;
        }
        newPairingData.push(pairData);
    });
    if (!matchingPairFound){
        newPairingData.push(pairToModify + "-" + newValue);
    };

    update_pair_cookie(newPairingData);
}

function reset_data() {
    $(".count").each(function(index, value) {
        $(value).text("0");
        $(value).parent().css("background-color", "#FF9900");
        $(value).css("color", "black");
        $(value).css("text-shadow", "5px 1px 5px white");
    });

    create_and_write_data_to_cookie();
}
