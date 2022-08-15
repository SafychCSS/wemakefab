<template>
    <div class="card">
        <span
            v-if="itemCard.sale"
            class="card__sale"
        >
            Sale − {{ itemCard.sale }}%
        </span>
        <div class="card__image">
            <img
                :src="require(`../assets/images/goods/${itemCard.image}.jpg`)"
                :srcset="require(`../assets/images/goods/${itemCard.image}@2x.jpg`)"
                :alt="itemCard.name"
            >
        </div>
        <p class="card__title">{{ itemCard.name }}</p>
        <div class="card__price">
            ${{ itemCard.price }}
            <span
                v-if="itemCard.oldPrice"
                class="card__price-old"
            >
                ${{ itemCard.oldPrice }}
            </span>
        </div>
        <button
            v-if="!itemCard.status"
            @click="addToCart(itemCard)"
            class="btn card__btn"
            :class="{'card__btn_added': itemCard.status}"
        >
            Add to basket
            <svg class="card__btn-icon card__btn-icon_rotate">
                <use :xlink:href="sprite + '#icon-plus'"></use>
            </svg>
        </button>
        <button
            v-else
            @click="addToCart(itemCard)"
            class="btn card__btn card__btn_added"
        >
            Added
            <svg class="card__btn-icon">
                <use :xlink:href="sprite + '#icon-check'"></use>
            </svg>
        </button>
    </div>
</template>

<script>
import sprite from '@/assets/images/sprite.svg';

export default {
    name: 'CatalogCard',
    
    props: {
        itemCard: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            sprite,
        };
    },

    methods: {
        addToCart(item) {
            this.$store.dispatch('addToCard', item);
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;

    &__sale {
        position: absolute;
        top: 25px;
        right: 25px;

        padding: 12px 18px;

        color: #fff;
        font-weight: 500;

        background-color: #FF6B00;
    }

    &__image {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04));
    }

    &__title {
        margin: 15px 0 0;
    }

    &__price {
        margin-top: 5px;
        margin-bottom: 0;

        font-weight: 500;
    }

    &__price-old {
        margin-left: 10px;

        text-decoration: line-through;
        color: #B7B7B7;
    }

    &__btn {
        position: relative;

        margin-top: 15px;
        text-align: left;

        &:hover {
            .card__btn-icon_rotate {
                transform-origin: center;
                transform: translateY(-50%) rotate(-90deg);
            }
        }
    }

    &__btn-icon {
        position: absolute;
        top: 50%;
        right: 20px;

        width: 16px;
        height: 16px;

        stroke: currentColor;

        transform: translateY(-50%);
        transition: .2s;
    }

    &__btn_added {
        color: #000;

        border: 1px solid #000000;
        background-color: #fff;

        .card__btn-icon {
            stroke: currentColor;
        }
    }
}
</style>