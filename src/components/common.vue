<template>

    <p>common</p>
    <p>common</p>
    <p>{{test.msg}}</p>
    <p>{{test.msg}}</p>
    <p>{{test.msg}}</p>
    <p @click="change()">{{test.msg}}</p>


</template>

<script type="text/javascript">

var $data = {};

module.exports = {

    data: function() {
        console.log(this.test)
        return $data;
    },

    props: ['test'],

    methods: {
        change: function(callback) {
            var _this = this;
            _this.test.msg = '222';

            if (typeof callback === 'function') {
                callback();
            }
        }
    }
}

</script>