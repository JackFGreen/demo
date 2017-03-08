<template>
    <nav id="side-bar">
        <ul class="side-bar-list">

            <li v-for="list in routesList.list">
                <p class="list-title-primary">{{list.name}}</p>
                <p>
                    <router-link :to="'/' + routesList.parent + '/' + list.path">{{list.path}}</router-link>
                </p>
            </li>

        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
        };
    },

    props: {
        routesList: {
            type: Object,
            required: true
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
    .router-link-active {
        color: $color_e;
    }
}
</style>
