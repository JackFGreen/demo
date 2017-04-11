<template>
    <div id="page-test">

        <h1><small>test</small></h1>
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
        // this.$nextTick(this.cvs)

        // console.log(1)
        /*setTimeout(function() {
            console.log(this)
            this.text = 'text'
        }, 1000)*/
        setTimeout(() => {
            // console.log(this)
            this.text = 'text'
            this.tpl = 'line1\
                    line2\
                    line3'
        }, 1000)
        return {}
    },

    mounted() {
        this.cvs()
    },

    methods: {
        cvs() {
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');

            // console.log(canvas)

            ctx.fillStyle = '#FF0000';
            ctx.fillRect(0, 0, 80, 100);
        },
        click() {
            // console.log('text: ' + this.text)

            // console.log(this)
            // console.log(this.$el)
            // console.log(this.$el.parentElement)
            var app = this.$el.parentElement
            var test = document.getElementById('test');

            var p = document.createElement('p')
            p.innerText = this.tpl
            test.appendChild(p)
            // console.log('tpl: ' + this.tpl)
        }
    }
}

</script>

<style lang="scss">
@import '../scss/_global.scss';
#page-test {
    .heart {
        position: relative;
        width: 50px;
        height: 50px;
        background: pink;
        transform: rotate(45deg);
        margin: 50px auto;
        &:before,
        &:after {
            content: '';
            position: absolute;
            left: -25px;
            top: 0;
            width: 50px;
            height: 50px;
            background: inherit;
            border-radius: 50%;
        }
        &:before {
            left: 0;
            top: -25px;
        }
    }
}

</style>
