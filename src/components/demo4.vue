<template>

    <div class="grid-test">
        <div class="grid-row grid-gutter">
            <div class="grid-col grid-col-8">
                <p>col-8</p>
            </div>
            <div class="grid-col grid-col-8">
                <p>col-8</p>
            </div>
            <div class="grid-col grid-col-8">
                <p>col-8</p>
            </div>
        </div>
    </div>

    <i class="iconfont"></i>
    <i class="ion-xbox"></i>

    <div class="test-bg"></div>

    <ul class="counter">
        <li>title</li>
        <li>title</li>
        <li>title</li>
    </ul>

</template>

<script>
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 14px;
    line-height: 1.5;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.grid-test {
    width: 90%;
    margin: 0 auto;
    border: 1px solid #000;
}

.grid-row {
    text-align: center;
    &:after {
        content: '';
        clear: both;
        display: block;
    }
}

// minxin-grid
$gridCol: 24;
$gridGutter: 8px;

@for $n from 1 through $gridCol {
    .grid-col-#{$n} {
        float: left;
        width: $n/$gridCol*100%;
    }
}

.grid-gutter {
    margin: 0 -#{$gridGutter};
    .grid-col {
        padding: 0 $gridGutter;
    }
}

.grid-col:nth-of-type(2n+1) {
    background: rgba(128, 128, 128, .7);
    p {
        background: rgba(0, 123, 222, .5);
    }
}
.grid-col:nth-of-type(2n) {
    background: rgba(128, 128, 128, .3);
    p {
        background: rgba(0, 123, 222, .5);
    }
}


// iconfont
$iconfont-path: '../fonts/ionicons/';
$iconfont-family: 'iconfont';
$iconfont-version: 'v0.0.1';

@font-face {
 font-family: $iconfont-family;
 src:url("#{$iconfont-path}/ionicons.eot?v=#{$iconfont-version}");
 src:url("#{$iconfont-path}/ionicons.eot?v=#{$iconfont-version}#iefix") format("embedded-opentype"),
  url("#{$iconfont-path}/ionicons.ttf?v=#{$iconfont-version}") format("truetype"),
  url("#{$iconfont-path}/ionicons.woff?v=#{$iconfont-version}") format("woff"),
  url("#{$iconfont-path}/ionicons.svg?v=#{$iconfont-version}#Ionicons") format("svg");
}


.iconfont {
    font-family: $iconfont-family;
    font-weight: 400;
    font-style: normal;
    display: inline-block;

    &:before {
        content: '\f25c';
    }
}

.test-bg {
    width: 200px;
    height: 200px;
    background: url(../images/t4.jpg);
}

.counter {
    counter-reset: test test2;

    li:before {
        counter-increment: test test2;
        content: counter(test) '.' counter(test2);
    }
}

</style>
