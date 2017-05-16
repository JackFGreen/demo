Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        test: 1,
        todos: [
            { id: 1, done: true },
            { id: 2, done: false },
            { id: 3, done: true },
        ]
    },
    mutations: {
        test(state) {
            console.log(state)
            state.test++
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
    }
})

export default store