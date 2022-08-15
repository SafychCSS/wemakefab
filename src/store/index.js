import axios from 'axios';
import {createStore} from 'vuex';

// todo: вынести localstorage, status mutation
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

        total: state => state.cart.reduce((acc, item) => acc + item.price, 0),

        saleTotal(state) {
            return state.cart.reduce((acc, item) => {
                return item.sale
                    ? acc + (item.oldPrice - item.price)
                    : acc + 0;
            }, 0);
        },

        totalWithoutSale: (_, getters) => getters.total + getters.saleTotal,
    },

    mutations: {
        setGoods(state, items) {
            state.goods = items;
        },

        setCart(state, item) {
            state.cart.push(item);
        },

        clearItem(state, id) {
            const removedItem = state.goods.find(item => item.id === id);
            removedItem.status = '';

            state.cart = state.cart.filter(item => item.id !== id);
        },

        clearCart(state) {
            state.cart = [];
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

        addToCard({ commit, state }, product) {
            const isAdded = state.cart.find(item => item.id === product.id);
            if (isAdded) {
                return;
            }

            const savedItems = JSON.parse(localStorage.getItem('wmfcart')) || [];
            if (!savedItems.includes(product.id)) {
                savedItems.push(product.id);
                localStorage.setItem('wmfcart', JSON.stringify(savedItems));
            }

            // todo: setStatus mutation
            const addedItem = state.goods.find(item => item.id === product.id);
            addedItem.status = 'in-cart';
            product.status = 'in-cart';
            commit('setCart', product);
        },

        removeItem({ commit }, id) {
            const savedItems = JSON.parse(localStorage.getItem('wmfcart'));
            const filteredItems = savedItems.filter(item => item !== id);
            console.log(filteredItems);
            localStorage.setItem('wmfcart', JSON.stringify(filteredItems));
            commit('clearItem', id);
        },

        clearCart({ commit, state }) {
            localStorage.removeItem('wmfcart');
            state.goods.map(item => item.status = '');
            commit('clearCart');
        }
    },
});