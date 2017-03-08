/**
 * rem适配
 * _font    默认 字体 大小
 * _width   默认 屏幕 宽度
 */

module.exports = function(base_font, base_width, max_width) {
    var docEl = document.documentElement;

    base_font = base_font || 100; //默认 字体 大小
    base_width = base_width || 320; //默认 屏幕 宽度 iphone5
    max_width = max_width || 1080;

    var dpr = window.devicePixelRatio || 1;
    var scale = 1 / dpr;

    var viewportEl = docEl.querySelector('[name="viewport"]');
    var content = 'width=device-width,initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';

    if (viewportEl) {
        viewportEl.setAttribute('content', content);
    } else {
        viewportEl = document.createElement('meta');
        viewportEl.setAttribute('name', 'viewport');
        viewportEl.setAttribute('content', content);
        document.head.appendChild(viewportEl);
    }

    function setHtmlFont() {
        var client_width = docEl.clientWidth;
        client_width = client_width > max_width ? max_width : client_width;

        docEl.style.fontSize = client_width / base_width * base_font + 'px';
    }
    setHtmlFont();
    window.onload = setHtmlFont;
    window.onresize = setHtmlFont;
}
