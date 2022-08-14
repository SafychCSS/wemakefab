<template>
    <div class="container">
        <form @submit.prevent="applyFilters" class="filters">
            <div class="row">
                <div class="col">
                    <div class="filters__item">
                        <p class="filters__name">Search</p>
                        <div class="filters__search">
                            <input
                                v-model="form.search"
                                class="filters__field"
                                type="text"
                            >
                            <button
                                @click="form.search = ''"
                                class="filters__search-reset"
                                type="button"
                            >
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
                            <select
                                v-model="form.category"
                                class="filters__field"
                            >
                                <option
                                    v-for="(cat, idx) of categories"
                                    :key="idx"
                                >
                                    {{ cat }}
                                </option>
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
                            <select
                                v-model="form.sale"
                                class="filters__field"
                            >
                                <option value="bestsellers">Bestsellers</option>
                                <option value="high">Price: High-Low</option>
                                <option value="low">Price: Low-High</option>
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
            form: {
                search: '',
                category: 'Sneakers',
                sale: 'bestsellers',
            },

            categories: null,
        };
    },

    created() {
        this.categories = this.$store.getters.categories;
    },

    methods: {
        applyFilters() {
            console.log('filters change');
            this.$emit('changeFilters', this.form);
        },
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