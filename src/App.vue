<template>
    <div class="wrapper">
        <TheHeader/>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
    name: 'App',

    components: {
        TheHeader,
    },

    data() {
        return {
            asd: 1
        };
    }
};
</script>

<style>
</style>
