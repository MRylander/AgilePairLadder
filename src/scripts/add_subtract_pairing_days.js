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
