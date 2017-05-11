;
!(() => {
    var checkString = {
        string: '[object String]',
        number: '[object Number]',
        array: '[object Array]',
        object: '[object Object]',
        function: '[object Function]',
        reg: '[object RegExp]',
        date: '[object Date]',
        undefined: '[object Undefined]',
        null: '[object Null]'
    }

    var check = {
        string(o) {
            return Object.prototype.toString.call(o) === checkString.string;
        },
        number(o) {
            return Object.prototype.toString.call(o) === checkString.number;
        },
        array(o) {
            return Object.prototype.toString.call(o) === checkString.array;
        },
        object(o) {
            return Object.prototype.toString.call(o) === checkString.object;
        },
        function(o) {
            return Object.prototype.toString.call(o) === checkString.function;
        },
        reg(o) {
            return Object.prototype.toString.call(o) === checkString.reg;
        },
        date(o) {
            return Object.prototype.toString.call(o) === checkString.date;
        },
        undefined(o) {
            return Object.prototype.toString.call(o) === checkString.undefined;
        },
        null(o) {
            return Object.prototype.toString.call(o) === checkString.null;
        }
    }

    window.check = check;
})(window)
