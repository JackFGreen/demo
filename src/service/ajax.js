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
        layer.warning(error)
        return Promise.reject(error);
    });

    /*添加响应拦截器*/
    instance.interceptors.response.use(function(res) {
        /*对响应数据做些事*/
        layer.closeAll()

        layer.warning(res.data.message)

        return res;
    }, function(error) {
        /*请求错误时做些事*/
        var err = error.toString().indexOf('timeout') > -1 ? '请求超时' : '网络错误';

        layer.warning(err)
        return Promise.reject(error);
    });

    var ajax = {
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
