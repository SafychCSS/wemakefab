import axios from 'axios';
import {createStore} from 'vuex';

export default createStore({
    state: {
        goods: [],
    },

    getters: {
        categories(state) {
            if (state.goods.length)
                return new Set(state.goods.map(item => item.category));
        },
    },

    mutations: {
        setGoods(state, payload) {
            state.goods = payload;
        },
    },

    actions: {
        async loadGoods({commit}) {
            try {
                const result = await axios('../data.json');
                commit('setGoods', result.data);
            } catch (e) {
                console.error(e.message);
            }
        },
    },
});