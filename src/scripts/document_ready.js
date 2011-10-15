toggle = 0;

$(document).ready(function() {
    var data = read_cookie(pair_cookie_name);


    if (data == null) {
        show_popup_modal()
        return
    }

    construct_pair_ladder();

    $("#top_row_names .remove_developer").click(function() {
        remove_a_dev(this);
        return false;
    });

    toggle_from_default_view()
    init_hover_animation();
});


