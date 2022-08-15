<template>
    <div class="header">
        <div class="container">
            <div class="header__container">
                <div class="row header__row">
                    <div class="col">
                        <div class="header__logo">S—Shop</div>
                    </div>
                    <div class="col header__menu">
                        <ul class="menu">
                            <li class="menu__item menu__item_active menu__item_catalog">
                                <a class="menu__link" href="#">Catalog</a>
                            </li>
                            <li class="menu__item">
                                <a class="menu__link" href="#">Profile</a>
                            </li>
                            <li class="menu__item">
                                <a
                                    @click.prevent="toggleCart(true)"
                                    class="menu__link"
                                    href="#"
                                >
                                    Basket({{ this.$store.state.cart.length }})
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <CatalogCart
                    :show-cart="showCart"
                    @toggleCart="$emit('toggleCart', false)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CatalogCart from '@/components/CatalogCart';

export default {
    name: 'TheHeader',

    components: {
        CatalogCart,
    },

    props: {
        showCart: {
            type: Boolean,
            required: true,
        },
    },

    methods: {
        toggleCart(flag) {
            this.$emit('toggleCart', flag);
        }
    },
};
</script>

<style lang="scss" scoped>
.header {
    &__container {
        position: relative;

        padding-top: 35px;
        padding-bottom: 35px;

        border-bottom: 1px solid #BDBDBD;
    }

    &__row {
        align-items: center;
    }

    &__logo {
        font-size: 24px;
        line-height: 29px;
        font-weight: 600;
        text-transform: uppercase;
    }

    &__menu {
        width: calc(75% - 20px);
    }
}
</style>