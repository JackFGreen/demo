import axios from 'axios';
//  using application/x-www-form-urlencoded
// https://github.com/mzabriskie/axios#using-applicationx-www-form-urlencoded-format
import qs from 'qs';

!((window) => {
    var instance = axios.create({
        // timeout: 1000,
        headers: {
            'Token': 'user_token'
        }
    })

    /*添加请求拦截器*/
    instance.interceptors.request.use(function(config) {
        /*在发送请求之前做某事*/
        var type = config.method == 'get' ? 3 : 4;
        layer.loading(type)
        return config;

    }, function(error) {
        /*请求错误时做些事*/
        errHandle(error)
        return Promise.reject(error);
    });

    /*添加响应拦截器*/
    instance.interceptors.response.use(function(res) {
        /*对响应数据做些事*/
        layer.closeAll()
        // res.data.message && layer.warning(res.data.message)
        return res.data;

    }, function(error) {
        /*请求错误时做些事*/
        errHandle(error)
        return Promise.reject(error);
    });

    var errHandle = (error) => {
        console.log('Response', error.response);
        console.log('Request', error.request);
        console.log('Error', error.message);
        console.log('Config', error.config);

        var errMsg = error.message.indexOf('timeout') > -1 ? '请求超时' : '网络错误';

        layer.warning('', {
            content: errMsg + '<p class="xhr-info">' + error.message + '</p>'
        })

    }

    var ajax = {
        all: axios.all,
        spread: axios.spread,

        get(url, params, options) {
            var config = tool.merge({ params: params }, options);
            var tmp = instance.get(url, config);
            return tmp;
        },
        post(url, params, options) {
            // instance.defaults.headers['XXX'] = 'XXX';
            var tmp = instance.post(url, qs.stringify(params), options);
            return tmp;
        }
    }

    window.ajax = ajax;
})(window)

/**
 * ajax.all()
 * ajax.spread()
 *
function api1() {
    return ajax.get('api')
}

function api2() {
    return ajax.get('api')
}

function api3() {
    return ajax.get('api')
}

ajax.all([api1(), api2(), api3()])
    .then((res) => {
        // @param {Array} res
        console.log(res)
    })
    or
    .then(ajax.spread((res1, res2, res3) => {
        // @param {Object} res
        console.log(res1)
        console.log(res2)
        console.log(res3)
    }))
 */
