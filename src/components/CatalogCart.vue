<template>
    <div
        v-if="showCart"
        class="cart"
    >
        <ul class="menu cart__menu">
            <li class="menu__item">
                <a class="menu__link" href="#">Profile</a>
            </li>
            <li class="menu__item">
                <a
                    @click.prevent="toggleCart"
                    class="menu__link"
                    :class="{'menu__link_active': showCart}"
                    href="#"
                >
                    Basket({{ this.$store.state.cart.length }})
                </a>
            </li>
        </ul>

        <div class="cart__container">
            <p class="cart__total">Total</p>

            <table class="cart__table">
                <tr>
                    <td>Subtotal:</td>
                    <td>${{$store.getters.totalWithoutSale.toFixed(2)}}</td>
                </tr>
                <tr>
                    <td>Sale:</td>
                    <td>${{$store.getters.saleTotal.toFixed(2)}}</td>
                </tr>
                <tr>
                    <td>Content:</td>
                    <td>
                        <button
                            @click="clearCart"
                            type="button"
                            class="cart__clear"
                        >
                            Remove all
                        </button>
                    </td>
                </tr>
            </table>
        </div>

        <div class="cart__container cart__container_sum">
            <span>Order Total:</span>
            <span>${{$store.getters.total.toFixed(2)}}</span>
        </div>

        <div class="cart__container cart__container_goods">
            <ul class="cart-goods">
                <li
                    v-for="item in cartList"
                    :key="item.id"
                    class="cart-goods__item"
                >
                    <img
                        width="100"
                        height="100"
                        class="cart-goods__image"
                        :src="require(`../assets/images/goods/${item.image}.jpg`)"
                        :alt="item.name"
                    >
                    <div class="cart-goods__info">
                        <p class="cart-goods__title">{{ item.name }}</p>
                        <p class="cart-goods__price">${{ item.price }}</p>
                        <button
                            @click="remove(item.id)"
                            class="cart-goods__btn"
                            type="button"
                        >
                            Remove
                        </button>
                    </div>
                </li>
            </ul>
        </div>

        <div class="cart__container cart__container_checkout">
            <a href="#" class="cart__checkout">
                Checkout
                <svg>
                    <use :xlink:href="sprite + '#icon-select'"></use>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import sprite from '@/assets/images/sprite.svg';

export default {
    name: 'CatalogCart',

    props: {
        showCart: {
            type: Boolean,
            required: true,
        },
    },

    setup(props, { emit }) {
        const store = useStore();

        const toggleCart = () => {
            emit('toggleCart', false);
        };

        const clearCart = () => {
            store.dispatch('clearCart');
        };

        const remove = (id) => {
            store.dispatch('removeItem', id);
        };

        const cartList = computed(() => store.state.cart);

        return {
            sprite,
            toggleCart,
            remove,
            clearCart,
            cartList,
        }
    },
};
</script>

<style lang="scss" scoped>
.cart {
    position: absolute;
    top: 0;
    right: -100px;
    z-index: 100;

    max-width: 455px;
    width: 100%;
    max-height: 100vh;
    overflow: auto;

    background-color: #fff;

    &__menu {
        justify-content: flex-end;
        padding: 40px 100px 40px 40px;

        border-bottom: 1px solid #BDBDBD;
    }

    &__container {
        margin-top: 20px;
        padding-right: 100px;
        padding-left: 40px;
    }

    &__container_sum {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 40px;
        padding-top: 20px;
        padding-bottom: 20px;

        font-size: 20px;
        font-weight: 500;
        line-height: 24px;

        border-top: 1px solid #BDBDBD;
        border-bottom: 1px solid #BDBDBD;
    }

    &__container_checkout {
        margin-top: 40px;
        padding-top: 30px;
        padding-bottom: 30px;

        font-weight: 500;
        font-size: 20px;
        color: #fff;

        background-color: #000;
    }

    &__container_goods {
        max-height: 300px;
        overflow: auto;
    }

    &__total {
        margin: 0;

        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
    }

    &__table {
        width: 100%;
        margin-top: 20px;

        tr {
            td {
                padding: 10px 0;

                &:nth-child(2) {
                    text-align: right;
                    font-weight: 500;
                }
            }
        }
    }

    &__clear {
        font-weight: 500;

        border-bottom: 1px solid #000;
        background-color: transparent;

        &:hover {
            border-color: transparent;
        }
    }

    &__checkout {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            width: 14px;
            height: 8px;

            stroke-width: 2;
            stroke: #fff;

            transform: rotate(-90deg);
            transition: .2s;
        }

        &:hover {
            svg {
                transform: translateX(10px) rotate(-90deg);
            }
        }
    }

    @media (max-width: 1600px) {
        right: 0;

        &__container,
        &__menu {
            padding-right: 40px;
        }
    }
}

.cart-goods {
    &__item {
        display: flex;
        gap: 10px;

        & + .cart-goods__item {
            margin-top: 40px;
        }
    }

    &__image {
        flex-shrink: 0;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    &__title {
        margin: 0;

        color: #818181;
    }

    &__price {
        margin: 0;

        font-weight: 500;
    }

    &__btn {
        margin-top: auto;

        text-align: left;

        border-bottom: 1px solid #000;
        background-color: transparent;

        &:hover {
            border-color: transparent;
        }
    }
}
</style>