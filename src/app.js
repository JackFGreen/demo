import routes from'./routes';

const router = new VueRouter({routes});

Vue.use(VueRouter);

const App = new Vue({
    router
}).$mount('#app');
