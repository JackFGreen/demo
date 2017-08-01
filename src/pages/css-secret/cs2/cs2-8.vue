<template>
    <div id="page-cs2-8">
        <h2>{{$route.name}}</h2>

        <div class="eg-code"><pre><code>border: 20px solid transparent;
    background: linear-gradient(white, white),
                         repeating-linear-gradient(-45deg, red 0, red 12%, transparent 0, transparent 24%, green 0, green 36%, transparent 0, transparent 48%);
    background-clip: padding-box, border-box;
    background-origin: border-box;</code></pre></div>
        <div class="box box1">123</div>

        <div class="eg-code"><pre><code>border: 1px solid transparent;
    background: linear-gradient(white, white),
                         repeating-linear-gradient(-45deg, red 0, red 12%, transparent 0, transparent 24%, green 0, green 36%, transparent 0, transparent 48%);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    <span class="c-theme">background-size: 30px;</span>
    animation: ants 2s linear infinite;
    @keyframes ants {
        to {
            background-position: 100%;
        }
    }</code></pre></div>
        <p>需要设置合适的 background-size</p>
        <div class="box box2">123</div>

    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}

</script>

<style lang="scss">
#page-cs2-8 {
    .box {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }

    .box1 {
        border: 20px solid transparent;
        background: linear-gradient(white, white),
                    repeating-linear-gradient(-45deg, red 0, red 12%, transparent 0, transparent 24%, green 0, green 36%, transparent 0, transparent 48%);
        background-clip: padding-box, border-box;
        background-origin: border-box;
    }
    .box2 {
        border: 1px solid transparent;
        background: linear-gradient(white, white),
                    repeating-linear-gradient(-45deg, red 0, red 12%, transparent 0, transparent 24%, green 0, green 36%, transparent 0, transparent 48%);
        background-clip: padding-box, border-box;
        background-origin: border-box;
        background-size: 30px;
        animation: ants 2s linear infinite;
    }
    @keyframes ants {
        to {
            background-position: 100%;
        }
    }
}

</style>
