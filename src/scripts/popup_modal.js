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

function show_popup_modal() {
    clear_form_data();
    $("#container").hide()

    var maskHeight = $(document).height() - 20;
    var maskWidth = $(document).width() - 20;

    var modal_mask = $('#modal .mask');
    $(modal_mask).css({'width':maskWidth,'height':maskHeight});
    $(modal_mask).fadeTo(1000, 0.6);
    $("#modal .form_container").fadeIn(1000)
}

function hide_modal() {
    $('#modal .mask').fadeTo(1000, 0);
    $("#modal .form_container").fadeTo(1000, 0)
    $("#container").show(2000);
}

function close_add_new_developer_modal() {
    $('#add_new_dev_modal .mask').fadeTo(1000, 0);
    $("#add_new_dev_modal .form_container").fadeTo(1000, 0)
    $("#container").show(2000);
}

function show_add_new_developer_modal() {
    $("#container").hide()

    var maskHeight = $(document).height() - 20;
    var maskWidth = $(document).width() - 20;

    var modal_mask = $('#add_new_dev_modal .mask');
    $(modal_mask).css({'width':maskWidth,'height':maskHeight});
    $(modal_mask).fadeTo(1000, 0.6);
    $("#add_new_dev_modal .form_container").fadeIn(1000)

}
