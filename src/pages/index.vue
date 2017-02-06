<template>

    <h2>routes list</h2>

    <ul>
        <li v-for="obj in routes">
            <h3>
                <a href="#!{{obj.fullPath}}">{{obj.name}}</a>
            </h3>
        </li>
    </ul>
    
</template>

<script type="text/javascript">
import routes from '../routes';

export default {
    data() {
        var arr = ['/index'];//过滤不显示的路由

        for (let i = 0; i < arr.length; i++) {
            for (let k in routes) {
                arr[i] === k && delete routes[k];
            }
        }

        return {
            routes: routes
        }
    }
}

</script>

<style scoped lang="scss">
a {
    display: block;
    line-height: 30px;
}

</style>
