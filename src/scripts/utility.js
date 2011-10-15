function text_fill() {
    var fontSize = 2e
    m;
    var ourText = $('p:visible:first', this);
    var maxHeight = $(this).height();
    var maxWidth = $(this).width();
    var textHeight;
    var textWidth;
    do {
        ourText.css('font-size', fontSize);
        textHeight = ourText.height();
        textWidth = ourText.width();
        fontSize = fontSize - 1;
    } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
    return this;
}