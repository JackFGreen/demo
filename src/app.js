import './service/service';
import routes from './routes';
import store from './store/index';
console.log(store)

import '../src/scss/layout.scss';

Vue.use(VueRouter);

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
    window.scrollTo(0, 0);
});

const App = new Vue({
    store,
    router
}).$mount('#app');

// console.log(router.currentRoute)
// console.log(router.app)
// console.log(router.mode)
