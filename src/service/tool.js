export default (() => {
    var root = document.documentElement;

    var tool = {
        /**
         * 选择器
         * @param {String} selector css 选择器
         * @param {Object} context DOM
         */
        $$(selector, context) {
            context = context || document;
            var element = context.querySelectorAll(selector);
            return Array.prototype.slice.call(element);
        },
        /**
         * 检测属性
         * @param {String} property css 属性
         */
        testProperty(property) {
            if (property in root.style) {
                root.classList.add(property.toLowerCase());
                return true;
            }
            root.classList.add('no-' + property.toLowerCase());
            return false;
        },
        /**
         * 检测属性值
         * @param {String} id 标识
         * @param {String} value 值
         * @param {String} property 属性
         */
        testValue(id, value, property) {
            var dummy = document.createElement('p');
            dummy.style[property] = value;

            if (dummy.style[property]) {
                root.classList.add(id);
                return true;
            }
            root.classList.add('no-' + id);
            return false;
        }
    }

    window.tool = tool;
})()
