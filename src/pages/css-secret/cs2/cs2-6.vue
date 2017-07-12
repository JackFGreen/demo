<template>
    <div id="page-cs2-6">
        <h2>{{$route.name}}</h2>

        <button @click="setBgs1()">点击设置 background-size: 30px 30px;</button>
        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 50%, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 50%, transparent 0);</code></pre></div>
        <div class="box box1"></div>

        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 1px, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 1px, transparent 0);</code></pre></div>
        <div class="box box2"></div>

        <button @click="setBgs2()">点击设置 background-size:  60px 60px, 60px 60px, 30px 30px, 30px 30px;</button>
        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 2px, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 2px, transparent 0), linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 1px, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 1px, transparent 0);</code></pre></div>
        <div class="box box3"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        setBgs1() {
            var box1 = tool.$$('.box1')[0]
            var box2 = tool.$$('.box2')[0]
            box1.style.backgroundSize = '30px 30px'
            box2.style.backgroundSize = '30px 30px'
        },
        setBgs2() {
            var box3 = tool.$$('.box3')[0]
            box3.style.backgroundSize = '60px 60px, 60px 60px, 30px 30px, 30px 30px'
        }
    }
}

</script>

<style lang="scss">
#page-cs2-6 {
    .box {
        width: 200px;
        height: 100px;
        margin-bottom: 10px;
    }

    .box1 {
        background: pink;
        background-image: linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 50%, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 50%, transparent 0);
    }
    .box2 {
        background: pink;
        background-image: linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 1px, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 1px, transparent 0);
    }
    .box3 {
        background: pink;
        background-image: linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 2px, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 2px, transparent 0), linear-gradient(90deg, hsla(100, 100%, 50%, 0.5) 1px, transparent 0), linear-gradient(hsla(100, 100%, 50%, 0.5) 1px, transparent 0);
    }

}

</style>
