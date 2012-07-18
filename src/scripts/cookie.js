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

function create_and_write_data_to_cookie(pairToModify, newValue) {
    var oldPairingData = persistedPairingDataList.getData();
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

    persistedPairingDataList.setData(newPairingData);
}

function reset_data() {
    persistedPairingDataList.setData("");
    location.reload();
}
