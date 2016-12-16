/**
 * 自适应设置
 * @type {[type]}
 */

module.exports = function() {
    var docEl = document.documentElement;

    var base_width = 320;// 定义基准屏幕 iPhone5
    var base_size = 100;// 定义基准字体大小 html: 100px

    function setHtmlFontSize() {
        var doc_width = docEl.clientWidth;// 获取当前屏幕大小

        var _size = doc_width / base_width * base_size;// 设置当前屏幕字体大小

        docEl.style.fontSize = _size + 'px';
    }

    window.onresize = setHtmlFontSize;

}
