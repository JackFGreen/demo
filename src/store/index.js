Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        count: 1,
        todos: [
            { id: 1, done: true },
            { id: 2, done: false },
            { id: 3, done: true },
        ]
    },
    mutations: {
        // count(state, payload) {
        //     console.log(state, payload)
        //     // state.count += payload
        //     state.count += payload.len + payload.lens
        // }
        count(state, { len, lens }) {
            console.log(len, lens)
            // state.count += payload
            state.count += len + lens
        },
        plus(state, { len, lens }) {
            console.log(len, lens)
            // state.count += payload
            state.count += len + lens
        },
        other(state) {
            console.log('other')
        }
    },
    getters: {
        doneTodos(state) {
            console.log(state)
            return state.todos.filter(o => o.done === true)
        },
        doneTodosLen(state, getters) {
            console.log(getters)
            return getters.doneTodos.length
        }
    },
    actions: {
        // api(context, payload) {
        //     ajax.post('url', data)
        //         .then(res=>{
        //             context.commit('xxx', res)
        //         })
        // }
        // api({commit, state}) {
        //     setTimeout(function() {
        //         commit('plus', {
        //             len: ' - commit - ',
        //             lens: 'api'
        //         })
        //     }, 1000);
        // }
        /**
         * promise
         */
        api({ commit, state }) {
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    commit('plus', {
                        len: ' - commit - ',
                        lens: 'api'
                    })
                    resolve('resolve')
                    // reject('reject')
                }, 1000);
            })
        },
        ac({ dispatch, commit }) {
            return dispatch('api').then(() => {
                commit('other')
            }).then(() => {
                console.log(1)
            })
        }
    }
})

export default store