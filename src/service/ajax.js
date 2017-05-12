import axios from 'axios';
import qs from 'qs';

!((window) => {
    console.log(axios.defaults)

    /*添加请求拦截器*/
    axios.interceptors.request.use(function(config) {
        /*在发送请求之前做某事*/
        layer.loading(3)

        return config;
    }, function(error) {
        /*请求错误时做些事*/
        console.log(error)
        return Promise.reject(error);
    });

    /*添加响应拦截器*/
    axios.interceptors.response.use(function(config) {
        /*对响应数据做些事*/
        layer.closeAll()

        return config;
    }, function(error) {
        /*请求错误时做些事*/
        console.log(error)
        return Promise.reject(error);
    });


    var setOption = (options) => {
        axios.defaults = options;
    }


    var ajax = {
        get(url, params, options) {
            var config = tool.merge({ params: params }, options);

            var tmp = axios.get(url, config)

            return tmp;
        },
        post(url, params, options) {
            var tmp = axios.post(url, qs.stringify(params), options)

            return tmp;
        }
    }

    ajax.post('/v3/cash-apply/apply-info', {
            a: 1
        }, {
            timeout: 300
        })
        .then((res) => {
            console.log(res)
            // layer.warning(res.message)

        }).catch((err) => {
            console.log(err)
        })

    window.ajax = ajax;
})(window)
