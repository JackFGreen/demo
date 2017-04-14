<template>
    <div id="page-cs2-5">
        <h2>{{$route.name}}</h2>
        <p>如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小,则该色标的位置值会被设置为它前面所有色标位置值的最大值。</p>

        <pre><code>background: linear-gradient(#fb3, #58a);</code></pre>
        <div class="box box1"></div>

        <pre><code>background: linear-gradient(#fb3 50%, #58a 50%);</code></pre>
        <div class="box box2"></div>

        <pre><code>background: linear-gradient(#fb3 30%, #58a 0);</code></pre>
        <div class="box box3"></div>

        <pre><code>background: linear-gradient(#fb3 33.33%, #58a 0, #58a 66.66%, pink 0);</code></pre>
        <div class="box box4"></div>

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
        background: linear-gradient(#fb3 30%, #58a 0);
    }
    .box4 {
        background: linear-gradient(#fb3 33.33%, #58a 0, #58a 66.66%, pink 0);
    }

    .box {
        background-size: 100% 50px;        
    }
}

</style>
