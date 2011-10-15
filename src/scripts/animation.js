function init_divorced_hover_animation() {
    $("#divorced_people .divorce").hover(
        function() {
            var dev_name = $(this).text().split(" - ")[0];
            var top_p = $("#top_row_names td." + dev_name + " .dev_name");

            var left_p = $("tr#" + dev_name + " td.left_name .dev_name");

            $(top_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(2.5)',
                'color' : 'red'
            });

            $(left_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(2.5)',
                'color' : 'red'
            });
        },

        function() {
            var dev_name = $(this).text().split(" - ")[0];
            var top_p = $("#top_row_names td." + dev_name + " .dev_name");
            var left_p = $("tr#" + dev_name + " td.left_name .dev_name");

            $(top_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(1)',
                'color' : 'white'
            })

            $(left_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(1)',
                'color' : 'white'
            })
        }
    );
}

function init_count_hover_animation() {
    $("#pair_ladder_table td.count_td").hover(
        function () {
            var left_p = $(this).siblings(".left_name").find(".dev_name");
            var top_name_index = $(this).parent().children().index($(this));
            var top_p = $($("#top_row_names td")[top_name_index]).find(".dev_name")
            $(left_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(2.5)',
                'color' : 'yellow'

            })

            $(top_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(2.5)',
                'color' : 'yellow'
            })
        },

        function () {
            var left_p = $(this).siblings(".left_name").find(".dev_name");
            var top_name_index = $(this).parent().children().index($(this));
            var top_p = $($("#top_row_names td")[top_name_index]).find(".dev_name")
            $(left_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(1)',
                'color' : 'white'
            })

            $(top_p).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(1)',
                'color' : 'white'
            })

        }
    );
}

function init_dev_name_hover_animation() {
    $("#top_row_names td.top_name").hover(

        function () {
            var top_bottom_count_index = $("#top_row_names td").index($(this));
            var dev_name = $(this).find(".dev_name").text()

            $("#pair_ladder_table tr.left_names").each(function(index, row) {
                var count_td = $(row).children()[top_bottom_count_index];
                if ($(count_td).hasClass("count_td")) {
                    $(count_td).children(".count").css({
                        '-moz-transition': '-moz-transform 0.5s',
                        '-moz-transform':'scale(1.5)',
                        'zIndex' : '4'
                    })
                }
            });

            $("#" + dev_name).children().each(function(index, count_box) {
                if ($(count_box).hasClass("count_td")) {
                    $(count_box).children(".count").css({
                        '-moz-transition': '-moz-transform 0.5s',
                        '-moz-transform':'scale(1.5)',
                        'zIndex' : '4'
                    })
                }
            });

            $($("#" + dev_name).children()[0]).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(1.5)'
            });
        },

        function () {
            var top_bottom_count_index = $("#top_row_names td").index($(this));
            var dev_name = $(this).find(".dev_name").text()

            $("#pair_ladder_table tr.left_names").each(function(index, row) {
                var count_td = $(row).children()[top_bottom_count_index];
                if ($(count_td).hasClass("count_td")) {
                    $(count_td).children(".count").css({
                        '-moz-transition': '-moz-transform 0.5s',
                        '-moz-transform':'scale(1)'
                    })
                }
            });

            $("#" + dev_name).children().each(function(index, count_box) {
                if ($(count_box).hasClass("count_td")) {
                    $(count_box).children(".count").css({
                        '-moz-transition': '-moz-transform 0.5s',
                        '-moz-transform':'scale(1)'
                    })
                }
            });

            $($("#" + dev_name).children()[0]).css({
                '-moz-transition': '-moz-transform 0.5s',
                '-moz-transform':'scale(1)'
            });


        }
    );
}

function init_hover_animation() {
    init_count_hover_animation();
    init_divorced_hover_animation();
    init_dev_name_hover_animation();
}