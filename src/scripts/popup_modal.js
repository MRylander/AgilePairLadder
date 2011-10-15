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
