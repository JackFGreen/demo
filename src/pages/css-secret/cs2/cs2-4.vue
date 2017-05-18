<template>
    <div id="page-cs2-4">
        <h2>{{$route.name}}</h2>

        <div class="eg-code"><pre><code>border-radius: 10px;
outline: 10px solid #ccc;
box-shadow: 0 0 0 1px #ccc;</code></pre></div>

        <div class="box"></div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        click() {
            alert(1)
        }
    }
}

</script>

<style lang="scss">
#page-cs2-4 {
    .box {
        width: 200px;
        height: 100px;
        background: pink;
        border-radius: 10px;
        outline: 10px solid #ccc;
        box-shadow: 0 0 0 5px #ccc;
    }
}

</style>
