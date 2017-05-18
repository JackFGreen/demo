<template>
    <div id="page-cs2-1">
        <h2>{{$route.name}}</h2>

        <ul>
            <li><a href="http://www.w3school.com.cn/cssref/pr_background-clip.asp" target="_blank">background-clip</a></li>
        </ul>

        <p>默认状态下，背景会延伸到边框的区域下层</p>
        <div class="eg-code"><pre><code>background-clip: border-box;</code></pre></div>
        <div class="box"></div>

        <div class="eg-code"><pre><code>background-clip: padding-box;</code></pre></div>
        <div class="box box-diff"></div>
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
        margin-bottom: 10px;
        border: 10px dashed hsla(153, 47%, 49%, 0.5);
        background: pink;
        background-clip: border-box;
    }

    .box-diff {
        background-clip: padding-box;
    }
}

</style>
