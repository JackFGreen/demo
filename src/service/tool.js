export default () => {
    var tool = {
        $$: function(selector, context) {
            context = context || document;
            var element = context.querySelectorAll(selector);
            return Array.prototype.slice.call(element);
        }
    }

    for (var k in tool) {
        window[k] = tool[k];
    }
}
