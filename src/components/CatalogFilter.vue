<template>
    <div class="container">
        <form class="filters">
            <div class="row">
                <div class="col">
                    <div class="filters__item">
                        <p class="filters__name">Search</p>
                        <div class="filters__search">
                            <input class="filters__field" value="asd" type="text">
                            <button class="filters__search-reset" type="button">
                                <svg>
                                    <use :xlink:href="sprite + '#icon-close'"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="filters__item">
                        <p class="filters__name">Product category</p>
                        <div class="filters__select">
                            <select class="filters__field">
                                <option value="1">Sneakers</option>
                                <option value="2">Sneakers2</option>
                                <option value="3">Sneakers4</option>
                            </select>
                            <svg class="filters__select-arrow">
                                <use :xlink:href="sprite + '#icon-select'"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="filters__item">
                        <p class="filters__name">Sale</p>
                        <div class="filters__select">
                            <select class="filters__field">
                                <option value="1">Bestsellers</option>
                                <option value="2">Bestsellers2</option>
                                <option value="3">Bestsellers4</option>
                            </select>
                            <svg class="filters__select-arrow">
                                <use :xlink:href="sprite + '#icon-select'"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="col filters__btn">
                    <button class="btn">Apply</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import sprite from '@/assets/images/sprite.svg';

export default {
    name: 'CatalogFilter',

    data() {
        return {
            sprite,
        };
    },
};
</script>

<style lang="scss" scoped>
.filters {
    &__item {
    }

    &__name {
        margin-bottom: 20px;

        font-size: 18px;
        font-weight: 500;
    }

    &__field {
        width: 100%;
        padding: 20px 40px 20px 20px;

        font-size: 18px;
        font-weight: 500;

        background-color: #F5F5F5;
    }

    &__search {
        position: relative;
    }

    &__btn {
        display: flex;
        align-items: flex-end;
    }

    &__search-reset {
        position: absolute;
        top: 50%;
        right: 20px;

        background-color: transparent;

        transform: translateY(-50%);

        svg {
            width: 10px;
            height: 10px;

            stroke: #000;
        }
    }

    &__select {
        position: relative;
    }

    &__select-arrow {
        position: absolute;
        top: 50%;
        right: 20px;

        width: 14px;
        height: 7px;

        stroke: red;

        transform: translateY(-50%);
    }
}
</style>