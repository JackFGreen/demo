<template>
    <div id="css-secret">
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
    }
}
</script>

<style lang="scss">
#css-secret {

    @supports (text-shadow: 0 0 0.3em gray) {
        h1 {
            text-shadow: 0 0 0.3em gray;
        }
    }
}
</style>
