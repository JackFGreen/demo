<template>
    <div>
        <div class="demo1">
            <h2><p><em>啦啦啦啦啦啦啦啦</em></p></h2>

            <h2><p><em>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</em></p></h2>

            <h2><p><em>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</em></p></h2>
        </div>

        <div class="demo2">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>

        <div class="demo3">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

div {
    margin-bottom: 20px;
}

.demo1 {
    h2 {
        text-align: center;
        width: 300px;
        background: pink;
        margin-bottom: 20px;
    }
    p {
        display: inline-block;
        text-align: left;
        background: gray;
    }
    em {
        display: -webkit-box;
        // display: flex;
        -webkit-box-orient: vertical;
        // flex-direction: column;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.demo2 {
    ul {
        text-align: justify;
        background: pink;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        &:after {
            content: '';
            width: 100%;
            display: inline-block;
        }
    }
    li {
        list-style: none;
        display: inline-block;
    }
}

.demo3 {
    overflow: hidden;
    ul {
        background: pink;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        margin-left: -1px;
    }
    li {
        box-sizing: border-box;
        list-style: none;
        width: 20%;
        border-left: 1px solid #000;
        float: left;
        text-align: center;
    }
}
</style>
