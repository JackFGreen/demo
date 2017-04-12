<template>
    <div id="page-cs1">
        <router-view></router-view>
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
