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
}

.grid-gutter {
    margin: 0 -8px;
    .grid-col {
        padding: 0 8px;
    }
}

// minxin-grid
$gridCol: 24;
@for $n from 1 through $gridCol {
    .grid-col-#{$n} {
        float: left;
        width: $n/$gridCol*100%;
    }
}
</style>
