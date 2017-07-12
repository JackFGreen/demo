<template>
    <div id="page-cs2-6">
        <h2>{{$route.name}}</h2>

        <h3>网格</h3>
        <button @click="setBgs1()">点击设置 background-size: 30px 30px;</button>
        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 50%, transparent 0),
                                    linear-gradient(hsla(200, 100%, 50%, 0.5) 50%, transparent 0);</code></pre></div>
        <div class="box box1"></div>

        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 1px, transparent 0),
                                    linear-gradient(hsla(200, 100%, 50%, 0.5) 1px, transparent 0);</code></pre></div>
        <div class="box box2"></div>

        <button @click="setBgs2()">点击设置 background-size: 60px 60px, 60px 60px, 30px 30px, 30px 30px;</button>
        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 2px, transparent 0),
                                    linear-gradient(hsla(200, 100%, 50%, 0.5) 2px, transparent 0),
                                    linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 1px, transparent 0),
                                    linear-gradient(hsla(200, 100%, 50%, 0.5) 1px, transparent 0);</code></pre></div>
        <div class="box box3"></div>

        <h3>波点</h3>
        <button @click="setBgs3()">点击设置 background-size: 30px 30px;</button>
        <div class="eg-code"><pre><code>background-image: radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0);</code></pre></div>
        <div class="box box4"></div>

        <button @click="setBgs4()">点击设置 background-position: 0 0, 15px 15px;</button>
        <p>偏移量为大小的一半</p>
        <div class="eg-code"><pre><code>background-image: radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0),
                                    radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0);</code></pre></div>
        <div class="box box5"></div>

        <h3>棋盘</h3>
        <div class="eg-code"><pre><code>background-image: radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0),
                                    radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0);</code></pre></div>
        <div class="box box6"></div>
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
        },
        setBgs3() {
            var box4 = tool.$$('.box4')[0]
            box4.style.backgroundSize = '30px 30px'
        },
        setBgs4() {
            var box5 = tool.$$('.box5')[0]
            box5.style.backgroundPosition = '0 0, 15px 15px'
        }
    }
}

</script>

<style lang="scss">
#page-cs2-6 {
    .box {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        background: pink;
    }

    .box1 {
        background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 50%, transparent 0),
                          linear-gradient(hsla(200, 100%, 50%, 0.5) 50%, transparent 0);
    }
    .box2 {
        background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 1px, transparent 0),
                          linear-gradient(hsla(200, 100%, 50%, 0.5) 1px, transparent 0);
    }
    .box3 {
        background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 2px, transparent 0),
                          linear-gradient(hsla(200, 100%, 50%, 0.5) 2px, transparent 0),
                          linear-gradient(90deg, hsla(200, 100%, 50%, 0.5) 1px, transparent 0),
                          linear-gradient(hsla(200, 100%, 50%, 0.5) 1px, transparent 0);
    }

    .box4 {
        background-image: radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0);
    }
    .box5 {
        background-image: radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0),
                          radial-gradient(hsla(200, 100%, 50%, 1) 20%, transparent 0);
        background-size: 30px 30px;
    }

    .box6 {
        background: #ccc;
        // background-image: linear-gradient(#bbb 50%, transparent 0), linear-gradient(90deg, #bbb 50%, transparent 0);
        background: repeating-conic-gradient(#bbb 0, #bbb 25%, #eee 0, #eee 50%);
        background-size: 20px 20px;
    }

}

</style>
