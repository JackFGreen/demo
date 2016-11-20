var Vue = require('vue');

/**
 * 验证规则
 *
 * @type object
 */
var validator = {



    bankcard: function(i) {

        var reg = new RegExp('^\\d{14,19}$');

        return reg.test(i);
    }


};


/**
 * 验证数据
 *
 * @param target string
 * @param val mixed
 */
var validate = function(target, val) {

};

/**
 * 定义指令
 */
Vue.directive('validate', {});