import axios from 'axios';
import {createStore} from 'vuex';

export default createStore({
    state: {
        goods: [],
        cart: [],
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

        setCart(state, payload) {
            state.cart.push(payload);
        },
    },

    actions: {
        async loadGoods({ commit }) {
            try {
                const result = await axios('../data.json');
                commit('setGoods', result.data);
            } catch (e) {
                console.error(e.message);
            }
        },

        addToCard({ commit, state }, payload) {
            const isAdded = state.cart.find(item => item.id === payload.id);
            if (isAdded) {
                return;
            }

            const addedItem = state.goods.find(item => item.id === payload.id);
            addedItem.status = 'in-cart';
            payload.status = 'in-cart';
            commit('setCart', payload);
        },
    },
});