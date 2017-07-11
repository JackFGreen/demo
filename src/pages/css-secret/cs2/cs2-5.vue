<template>
    <div id="page-cs2-5">
        <h2>{{$route.name}}</h2>
        <p>如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小,则该色标的位置值会被设置为它前面所有色标位置值的最大值。</p>


        <button @click="setBgs1()">点击设置 background-size: 100% 20%;</button>
        <div class="eg-code"><pre><code>background: linear-gradient(#fb3, #58a);</code></pre></div>
        <div class="box box1"></div>

        <div class="eg-code"><pre><code>background: linear-gradient(#fb3 50%, #58a 50%);</code></pre></div>
        <div class="box box2"></div>

        <div class="eg-code"><pre><code>background: linear-gradient(#fb3 30%, #58a 0); // 0 和 30% 效果一样</code></pre></div>
        <div class="box box3"></div>

        <div class="eg-code"><pre><code>background: linear-gradient(#fb3 33.33%, #58a 0, #58a 66.66%, pink 0);</code></pre></div>
        <div class="box box4"></div>

        <h2>垂直条纹</h2>
        <div class="eg-code"><pre><code>background: linear-gradient(right, #fb3 50%, #58a 0);
    background-size: 30px 100%;</code></pre></div>
        <div class="box box5"></div>

        <h2>斜向条纹</h2>
        <button @click="setBgs6()">点击设置 background-size: 30px 30px;</button>
        <div class="eg-code"><pre><code>background: linear-gradient(45deg, #fb3 50%, #58a 0);</code></pre></div>
        <div class="box box6"></div>

        <div class="eg-code"><pre><code>background: repeating-linear-gradient(30deg, #fb3, #fb3 20%, #58a 0, #58a 40%);</code></pre></div>
        <div class="box box7"></div>

        <div class="eg-code"><pre><code>background: #58a;
background-image: repeating-linear-gradient(30deg, hsla(0, 100%, 100%, 0.1), hsla(0, 100%, 100%, 0.1) 20%, transparent 0, transparent 40%);
</code></pre></div>
        <div class="box box8"></div>

    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        setBgs1() {
            var box = tool.$$('.box1')[0]
            box.style.backgroundSize = '100% 20%';
        },
        setBgs6() {
            var box = tool.$$('.box6')[0]
            box.style.backgroundSize = '30px 30px';
        }
    }
}

</script>

<style lang="scss">
#page-cs2-5 {
    .box {
        width: 200px;
        height: 100px;
        margin-bottom: 10px;
    }

    .box1 {
        background: linear-gradient(#fb3, #58a);
    }
    .box2 {
        background: linear-gradient(#fb3 50%, #58a 50%);
    }
    .box3 {
        background: linear-gradient(#fb3 30%, #58a 30%);
    }
    .box4 {
        background: linear-gradient(#fb3 33.33%, #58a 0, #58a 66.66%, pink 0);
    }

    .box5 {
        background: linear-gradient(to right, #fb3 50%, #58a 0);
        background-size: 30px 100%;
    }

    .box6 {
        background: linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
    }

    .box7 {
        background: repeating-linear-gradient(30deg, #fb3, #fb3 20%, #58a 0, #58a 40%);
    }

    .box8 {
        background: #58a;
        background-image: repeating-linear-gradient(30deg, hsla(0, 100%, 100%, 0.1), hsla(0, 100%, 100%, 0.1) 20%, transparent 0, transparent 40%);
    }
}

</style>
