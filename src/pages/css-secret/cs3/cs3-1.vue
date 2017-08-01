<template>
    <div id="page-cs2-1">
        <h2>{{$route.name}}</h2>

        <div class="eg-code"><pre><code>border-radius: 50%;</code></pre></div>
        <div class="box box1"></div>

        <h3>半椭圆</h3>
        <div class="eg-code"><pre><code>border-radius: 50% / 100% 100% 0 0;</code></pre></div>
        <div class="box box2"></div>

        <h3>1/4 椭圆</h3>
        <div class="eg-code"><pre><code>border-radius: 100% 0 0 0;</code></pre></div>
        <div class="box box3"></div>
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
#page-cs2-1 {
    .box {
        width: 200px;
        height: 100px;
        background: pink;
        margin-bottom: 50px;
    }
    .box1 {
        border-radius: 50%;
    }
    .box2 {
        border-radius: 50% / 100% 100% 0 0;
    }
    .box3 {
        border-radius: 100% 0 0 0;
    }
}

</style>
