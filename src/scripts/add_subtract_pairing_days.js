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

function doAdd(button) {
    var value = button.parentNode.parentNode.children[0].innerHTML;
    var newValue = parseInt(value) + 1;
    button.parentNode.parentNode.children[0].innerHTML = newValue;
    create_and_write_data_to_cookie()
    find_married_and_divorced_couples()

}

function doSubtract(button) {
    var value = button.parentNode.parentNode.children[0].innerHTML;
    var newValue = parseInt(value) - 1;
    if (newValue >= 0) {
        button.parentNode.parentNode.children[0].innerHTML = newValue;
        create_and_write_data_to_cookie()
        find_married_and_divorced_couples()
    }
}
