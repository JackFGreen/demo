Vue.use(VueRouter);
import routes from './routes';
const router = new VueRouter({
    // mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        // if (to.hash) {
        //     return {
        //         selector: to.hash
        //     }
        // }
        // return { x: 0, y: 0 }
    // }，
    routes
});

router.afterEach(route => {
    document.title = route.name;
});

require('../src/scss/layout.scss');

const App = new Vue({
    router
}).$mount('#app');

console.log(router.currentRoute)
console.log(router.app)
console.log(router.mode)
