<template>
    <div class="wrapper">
        <TheHeader/>

        <div class="wrapper__filters">
            <CatalogFilter
                v-if="this.$store.getters.categories"
                @changeFilters="changeFilters"
            />
        </div>

        <div class="wrapper__catalog catalog">
            <div class="container">
                <div class="row">
                    <div
                        v-for="(item, idx) in filteredGoods"
                        :key="item.id"
                        class="col col_content_bottom catalog__item"
                        :class="{'col_half': item.hot}"
                    >
                        <p
                            v-if="idx === 0"
                            class="catalog__title"
                        >
                            {{ filters.sale }}: {{ filteredGoods.length }}
                        </p>
                        <CatalogCard :item-card="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import CatalogFilter from '@/components/CatalogFilter';
import CatalogCard from '@/components/CatalogCard';

export default {
    name: 'App',

    components: {
        TheHeader,
        CatalogFilter,
        CatalogCard,
    },

    data() {
        return {
            filters: {
                sale: 'bestsellers',
                category: 'Sneakers',
                search: '',
            },
        };
    },

    computed: {
        filteredGoods() {
            return this.$store.state.goods
                .filter(item => item.category === this.filters.category)
                .filter(item => item.name.toLowerCase().includes(this.filters.search.toLowerCase()))
                .sort((a, b) => {
                    if (this.filters.sale === 'high') {
                        return b.price - a.price;
                    } else if (this.filters.sale === 'low') {
                        return a.price - b.price;
                    }
                });
        },
    },

    async created() {
        await this.$store.dispatch('loadGoods');
    },

    methods: {
        changeFilters(data) {
            this.filters = {...data};
        },
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    &__filters {
        margin-top: 80px;
    }

    &__catalog {
        margin-top: 120px;
    }
}

.catalog {
    &__item {
        margin-bottom: 60px;
    }

    &__title {
        margin-top: 0;
        margin-bottom: auto;

        font-size: 40px;
        font-weight: 700;
        text-transform: uppercase;
    }
}

</style>
