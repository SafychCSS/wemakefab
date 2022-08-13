<template>
    <div class="header">
        <div class="container header__container">
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
                            <a class="menu__link" href="#">Basket(2)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheHeader'
};
</script>

<style lang="scss" scoped>
.header {
    &__container {
        padding: 35px 0;
        border-bottom: 1px solid #BDBDBD;
    }

    &__row {
        align-items: center;
    }

    &__logo {
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;
    }

    &__menu {
        width: calc(75% - 20px);
    }
}

.menu {
    display: flex;
    align-items: center;
    gap: 44px;

    &__item {
    }

    &__item_catalog {
        margin-right: auto;
    }

    &__item_active {
        font-size: 18px;
        font-weight: 500;
        color: #FF6B00;
    }

    &__link {
        &:hover {
            color: #FF6B00;
        }
    }
}
</style>