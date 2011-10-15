function toggle_view() {
    toggle()
    var data = read_cookie(toggle_cookie_name)[0]
    write_toggle_data_to_cookie(data == 0 ? 1 : 0)
}

function toggle() {
    $(".count_td").each(function (index, countBox) {

        var leftDevName = $(countBox).parent().attr("id")
        var count_index = $(countBox).parent().find("td").index($(countBox));
        var topDevName = $($("#top_row_names td")[count_index]).children("p.dev_name").text();


        var newLeftDevName = $("#" + topDevName);
        var disabledBoxIndex = $("#pair_ladder_table tr").index($("#" + leftDevName));

        var disabledBox = $(newLeftDevName).find("td")[disabledBoxIndex]


        var clonedDisabledBox = $(disabledBox).clone();
        var clonedCountBox = $(countBox).clone();

        $(countBox).replaceWith(clonedDisabledBox)
        $(disabledBox).replaceWith(clonedCountBox)
    });

    init_hover_animation();
}

function toggle_from_default_view() {
    var data = read_cookie(toggle_cookie_name);
    data = (data == null) ? 0 : data[0];
    if (data == 1) {
        toggle_view()
    }
    write_toggle_data_to_cookie(data)
}