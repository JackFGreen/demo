<template>
    <div id="page-cs2-7">
        <h2>{{$route.name}}</h2>

        <h3>蝉原则</h3>
        <div class="eg-code"><pre><code>background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.3) 13%, transparent 0),
                                    linear-gradient(90deg, hsla(200, 100%, 70%, 0.5) 43%, transparent 0),
                                    linear-gradient(90deg, hsla(200, 100%, 89%, 0.7) 53%, transparent 0);
    background-size: 11px, 31px, 23px;</code></pre></div>
        <div class="box box1"></div>

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
#page-cs2-7 {
    .box {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        background: hsla(200, 100%, 50%, 0.8);
    }

    .box1 {
        background-image: linear-gradient(90deg, hsla(200, 100%, 50%, 0.3) 13%, transparent 0),
                          linear-gradient(90deg, hsla(200, 100%, 70%, 0.5) 43%, transparent 0),
                          linear-gradient(90deg, hsla(200, 100%, 89%, 0.7) 53%, transparent 0);
        background-size: 11px, 31px, 23px;
    }
}

</style>
