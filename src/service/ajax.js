import ajax from 'qwest';

var host = location.origin;


var initOptions = {

    responseType: 'json',

    // timeout:90000,

    headers: {
        // 'X-App-ID': app_id,
        // 'X-User-Token': user_token
    },

    attempts: 1

};

module.exports = {

    get: function (uri, params, options) {

        return ajax.get(host + uri, params);
    },
    post: function (uri, data, options) {

        return ajax.post(host + uri, data);
    },
    getStatic: function(uri) {

        var tmp = location.origin + location.pathname;

        return ajax.get(tmp + uri);
    },

    upload: function(url, data, options) {

      return ajax.post(url, data);
    }
};
