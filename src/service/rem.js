/**
 * rem适配
 * @param {Number} base_font    默认字体大小
 * @param {Number} base_width   默认屏幕宽度 iphone5
 * @param {Number} max_width    最大屏幕宽度
 *
 * 参照 hostcss https://github.com/imochen/hotcss
 */
export default (base_font, base_width, max_width) => {
    var docEl = document.documentElement;

    base_font = base_font || 100;
    base_width = base_width || 320;
    max_width = max_width || 540;

    function setHtmlFont() {
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

        var client_width = docEl.clientWidth;
        if (max_width && client_width / dpr > max_width) {
            client_width = max_width * dpr;
        }

        docEl.style.fontSize = client_width / base_width * base_font + 'px';
    }
    setHtmlFont();
    window.onload = setHtmlFont;
    window.onresize = setHtmlFont;
}
