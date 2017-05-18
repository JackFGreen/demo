<template>
    <div id="page-cs2-2">
        <h2>{{$route.name}}</h2>

        <ul>
            <li><a href="http://www.w3school.com.cn/cssref/pr_box-shadow.asp" target="_blank">box-shadow</a></li>
            <li><a href="http://www.w3school.com.cn/cssref/pr_outline.asp" target="_blank">outline</a></li>
        </ul>

        <h3>box-shadow</h3>
        <p>支持逗号分隔语法,我们可以创建任意数量的投影</p>
        <p>
            <mark>outset</mark>不会影响布局，不受
            <mark>box-sizing</mark>影响，可通过
            <mark>padding</mark>
            <mark>margin</mark>模拟所需空间，不会响应鼠标事件，比如悬停或点击</p>

        <div class="eg-code"><pre><code>box-shadow: 0 0 0 10px #ccc, 0 0 0 30px #ddd;</code></pre></div>
        <div class="box box1" @click="click()">点击或悬停查看效果</div>

        <div class="eg-code"><pre><code>box-shadow: 0 0 0 10px #ccc inset, 0 0 0 30px #ddd inset;</code></pre></div>
        <div class="box box1 box1-diff" @click="click()">点击或悬停查看效果</div>

        <h3>outline</h3>
        <p>类似
            <mark>border</mark>，但不会影响布局，不一定是矩形，不一定贴合<mark>border-radius</mark>产生的圆角</p>
        <p>
            <mark>outline-offset</mark>可设置 正负 偏移
        </p>
        <div class="box box2"></div>
        <div class="box box2 box2-diff"></div>
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
#page-cs2-2 {
    .box {
        width: 200px;
        height: 100px;
        margin-bottom: 10px;
        background: pink;
    }

    .box1 {
        box-shadow: 0 0 0 10px #ccc, 0 0 0 30px #ddd;

        &:hover {
            background: #eee;
        }
    }

    .box1-diff {
        box-shadow: 0 0 0 10px #bbb inset, 0 0 0 30px #ccc inset;
    }

    .box2 {
        border: 10px solid #ddd;
        outline: 5px dashed darkgreen;
        border-radius: 30px;
    }

    .box2-diff {
        outline-offset: 10px;
    }
}

</style>
