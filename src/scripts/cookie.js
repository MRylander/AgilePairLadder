var pair_cookie_name = "pair_cookie";
var dev_names_cookie_names = "dev_names_cookie"
var toggle_cookie_name = "toggle_cookie"

function update_dev_names_cookie(data) {
    document.cookie = dev_names_cookie_names + "=" + data + "; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
}

function write_toggle_data_to_cookie(data) {
    document.cookie = toggle_cookie_name + "=" + data + "; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
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

function create_and_write_data_to_cookie() {
    var pairCookieData = "";
    var devNameList = read_cookie(dev_names_cookie_names)

    var toggle = read_cookie(toggle_cookie_name)[0];

    if (toggle == 0) {
        for (var i = 0; i < devNameList.length; i++) {
            for (var j = i + 1; j < devNameList.length; j++) {
                var top_name = $("td." + devNameList[j]);
                var count_index = $("#top_row_names td").index($(top_name))

                var count_td = $("#" + devNameList[i] + " td")[count_index]
                var count_element = $(count_td).find(".count")[0];
                var pairedDays = $(count_element).text();

                pairCookieData += devNameList[i] + "-" + devNameList[j] + "-" + pairedDays + ",";
            }
        }
    } else {
        for (var i = 1; i < devNameList.length; i++) {
            for (var j = 0; j < i; j++) {
                var top_name = $("." + devNameList[j]);
                var count_index = $("#top_row_names td").index($(top_name))

                var count_td = $("#" + devNameList[i] + " td")[count_index]
                var count_element = $(count_td).find(".count")[0];
                var pairedDays = $(count_element).text();
                pairCookieData += devNameList[j] + "-" + devNameList[i] + "-" + pairedDays + ",";
            }
        }
    }

    update_pair_cookie(pairCookieData.substring(0, pairCookieData.length - 1))
}

function reset_data() {
    $(".count").each(function(index, value) {
        $(value).text("0");
        $(value).parent().css("background-color", "#FF9900");
        $(value).css("color", "black");
        $(value).css("text-shadow", "5px 1px 5px white");
    });

    create_and_write_data_to_cookie();
    clear_existing_married_couples()
    clear_existing_divorced_people()

}

function create_cookies_initial_data_and_write_to_cookies(devNameList) {
    var pairCookieData = '';

    for (var i = 0; i < devNameList.length; i++) {
        for (var j = i + 1; j < devNameList.length; j++) {
            pairCookieData += devNameList[i] + "-" + devNameList[j] + "-0,"
        }
    }

    var devNamesCookieData = ''
    for (var k = 0; k < devNameList.length; k++) {
        devNamesCookieData += devNameList[k] + ",";
    }

    update_pair_cookie(pairCookieData.substring(0, pairCookieData.length - 1))

    update_dev_names_cookie(devNamesCookieData.substring(0, devNamesCookieData.length - 1))
}
