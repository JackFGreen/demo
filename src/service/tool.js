;
!((window) => {
    var root = document.documentElement;
    var tool = {
        /**
         * 选择器
         * @param {String} selector css 选择器
         * @param {Object | String} context DOM | css 选择器
         * tool.$$('.test', tool.$$('#app'))
         * tool.$$('.test', '#app')
         */
        $$(selector, context) {
            context = context || document;
            context = check.string(context) ? this.$$(context)[0] : context;

            var element = context.querySelectorAll(selector);
            return Array.prototype.slice.call(element);
        },
        /**
         * 检测属性
         * @param {String} property css 属性
         * tool.testProperty('filter')
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
         * tool.testValue('blur', 'blur(10px)', 'filter')
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
        },
        /**
         * 合并
         */
        merge(obj1, obj2) {
            // var obj = {};
            for (var k in obj2) {
                obj1[k] = obj2[k];
            }
            return obj1;
        }
    }

    window.tool = tool;
})(window)
