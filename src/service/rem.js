/**
 * rem适配
 * _font    默认 字体 大小
 * _width   默认 屏幕 宽度
 */

module.exports = function(_font, _width) {
    var docEl = document.documentElement;

    var base_font = _font || 10; //默认 字体 大小
    var base_width = _width || 320; //默认 屏幕 宽度 iphone5

    function setHtmlFont(base_font, base_width) {
        var client_width = docEl.clientWidth;

        var _size = client_width / base_width;

        docEl.style.fontSize = _size * base_font + 'px';
    }
    window.onresize = function() {
        setHtmlFont(base_font, base_width);
    }
}
