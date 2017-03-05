<template>
    <div>

        <h1><small>webpack + vue</small></h1>
        <hr>
        <h2><mark>测试</mark></h2>

        <article><big>123</big></article>

        <div class="heart"></div>

        <div class="grid">
            <div class="grid-col grid-col-12">12</div>
            <div class="grid-col grid-col-12">12</div>
        </div>

        <div class="grid grid-gutter">
            <div class="grid-col grid-col-12">12</div>
            <div class="grid-col grid-col-12">12</div>
        </div>

        <pre>
            <code>
                <span>function test() {
                    console.log('test');
                }</span>
            </code>
        </pre>

        <input type="text" list="countries" />
        <datalist id="countries">
            <option value="中国"></option>
            <option value="美国"></option>
            <option value="日本"></option>
        </datalist>

        <br>

        <canvas id="myCanvas" @click="click"></canvas>
    </div>
</template>


<script>
const test = () => {
    console.log('test')
}

export default {
    data() {
        return {}
    },

    route: {
        data(arg) {
            console.log(1)
            /*setTimeout(function() {
                console.log(this)
                this.text = 'text'
            }, 1000)*/
            setTimeout(() => {
                console.log(this)
                this.text = 'text'
                this.tpl = 'line1\
                    line2\
                    line3'
            }, 1000)
        }
    },

    ready() {
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(0, 0, 80, 100);
    },

    methods: {
        click() {
            console.log('text: ' + this.text)

            console.log(this.$el.parentElement)
            var app = this.$el.parentElement

            var p = document.createElement('p')
            p.innerText = this.tpl
            app.appendChild(p)
            console.log('tpl: ' + this.tpl)
        }
    }
}
</script>

<style lang="scss">
@import '../scss/_global.scss';
.heart {
    position: relative;
    width: 100px;
    height: 90px;
    background: pink;
    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 50px;
        top: 0;
        width: 50px;
        height: 80px;
        background: red;
        border-radius: 50px 50px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &:before {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
}
</style>
