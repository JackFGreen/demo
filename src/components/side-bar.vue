<template>
    <nav id="side-bar">
        <ul class="side-bar-list">

            <li v-for="list in titleList">
                <p class="list-title-primary">{{list.primaryTitle}}</p>

                <p :class="{'active': arg == $index}"
                    v-for="subList in list.secondTitle">

                    <a v-link="list.basePath + subList.link" @click="setActive($index)">{{subList.title}}</a>
                </p>
            </li>

        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            arg: '',
            titleList: [
                {
                    primaryTitle: 'config-base',
                    basePath: '/webpack-vue/',
                    secondTitle: [
                        {
                            title: 'overview',
                            link: 'base-overview'
                        }
                    ]
                },
                {
                    primaryTitle: 'config-dev',
                    basePath: '/webpack-vue/',
                    secondTitle: [
                        {
                            title: 'overview',
                            link: 'dev-overview'
                        }
                    ]
                },
                {
                    primaryTitle: 'config-build',
                    basePath: '/webpack-vue/',
                    secondTitle: [
                        {
                            title: 'overview',
                            link: 'build-overview'
                        }
                    ]
                }
            ]
        }
    },

    methods: {
        setActive(index) {
            this.arg = index;
        }
    }
}
</script>

<style lang="scss">
@import '../scss/_global.scss';

#side-bar {
    @include border(right);

    a {
        display: block;
        padding-left: 28px;
    }

    p {
        margin: 8px 0;
    }

    .side-bar-list {
        padding-left: 10px;
        padding-right: 10px;
        @extend %list-style-none;

    }

    .list-title-primary {
        padding-left: 15px;
        @extend %pos-r;

        &:before {
            width: 3px;
            height: 100%;
            background: $color_e;
            @extend %pos-a;
            @extend %pos-cont;
            @extend %pos-t-l;
        }
    }

    .active {
        color: $color_e;
    }
}


</style>
