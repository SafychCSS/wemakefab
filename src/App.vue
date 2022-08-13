<template>
    <div class="wrapper">
        <TheHeader/>

        <div class="wrapper__filters">
            <CatalogFilter/>
        </div>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import CatalogFilter from '@/components/CatalogFilter';

export default {
    name: 'App',

    components: {
        TheHeader,
        CatalogFilter,
    },

    data() {
        return {
            asd: 1
        };
    }
};
</script>

<style lang="scss">
.wrapper {
    &__filters {
        margin-top: 80px;
    }
}
</style>
