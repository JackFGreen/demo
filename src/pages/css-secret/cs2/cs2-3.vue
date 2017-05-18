<template>
    <div id="page-cs2-3">
        <h2>{{$route.name}}</h2>

        <ul>
            <li>
                <a href="http://www.w3school.com.cn/cssref/pr_background-position.asp" target="_blank">background-position</a>
                <a href="http://caniuse.com/#search=background-position-x" target="_blank">caniuse</a>
            </li>
            <li>
                <a href="http://www.w3school.com.cn/cssref/pr_background-origin.asp" target="_blank">background-origin</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc" target="_blank">calc()</a>
            </li>
        </ul>

        <h3>background-position</h3>
        <div class="eg-code"><pre><code>background-position: right 30px bottom 10px;</code></pre></div>
        <div class="box box1"></div>

        <h3>background-origin</h3>
        <div class="eg-code"><pre><code>background-origin: content-box;</code></pre></div>
        <div class="box box2">content content content content</div>

        <h3>calc()</h3>
        <div class="eg-code"><pre><code>background-position: calc(100% - 30px) calc(100% - 10px);</code></pre></div>
        <div class="box box3"></div>

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
#page-cs2-3 {
    .box {
        width: 200px;
        height: 100px;
        margin-bottom: 10px;
        background: pink url('../../../images/vue.png') no-repeat left top;
        background-size: 50px;
    }

    .box1 {
        background-position: right 30px bottom 10px;
    }

    .box2 {
        padding: 10px;
        background-origin: content-box;
    }

    .box3 {
        background-position: calc(100% - 30px) calc(100% - 10px);
    }
}

</style>
