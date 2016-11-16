<template>

    <p>common</p>
    <p>common</p>
    <p>{{test}}</p>
    <p>{{test}}</p>
    <p>{{test}}</p>
    <p>{{test}}</p>


</template>

<script type="text/javascript">

var $data = {};

module.exports = {

    data: function() {
        console.log(this.test)
        return $data;
    },

    props: ['test']
}

</script>