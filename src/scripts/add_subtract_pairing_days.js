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
    Modified by Akshay Jawharkar
*/

function doAdd(button) {
    var td = $(button).closest("td.count_td").first();
    var value = td.find("div.count").text();
    value++;
    td.find("div.count").text(value);
    create_and_write_data_to_cookie(td.get(0).id, value);
}

function doSubtract(button) {
    var td = $(button).closest("td.count_td").first();
    var value = td.find("div.count").text();
    if (value <= 0) {
        return;
    }
    value--;
    td.find("div.count").text(value);
    create_and_write_data_to_cookie(td.get(0).id, value);
}
