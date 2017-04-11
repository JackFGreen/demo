<template>
    <div id="page-cs1">
        <h1>h1</h1>
        <div class="cs1"></div>
        <input type="text">
        <input type="checkbox">
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            console.log(tool.$$('#page-cs1'))
            console.log(tool.testProperty('filter'))
            console.log(tool.testValue('blur', 'blur(10px)', 'filter'))
        })
    }
}

</script>

<style lang="scss">
#page-cs1 {

    @supports (text-shadow: 0 0 0.3em gray) {
        h1 {
            text-shadow: 0 0 0.3em gray;
        }
    }
}

</style>
