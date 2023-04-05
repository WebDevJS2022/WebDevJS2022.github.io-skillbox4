<template>
    <main class="content container">
        <div class="content__top">
            <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link" href="index.html">
                        Catalog
                    </a>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link">
                        Cart
                    </a>
                </li>
            </ul>

            <h1 class="content__title">
                Cart
            </h1>
            <span class="content__info">
                {{ $store.state.cartProducts.length }} goods
            </span>
        </div>

        <section class="cart">
            <form class="cart__form form" action="#" method="POST">
                <div class="cart__field">
                    <ul class="cart__list">

                        <CartItem v-for="item in products" :key="item.productId" :item="item"/>

                    </ul>
                </div>

                <div class="cart__block">
                    <p class="cart__desc">
                        We&nbsp;calculate the cost of delivery at&nbsp;the next step
                    </p>
                    <p class="cart__price">
                        Total: <span>{{ totalPrice | numberFormat }} $</span>
                    </p>

                    <button class="cart__button button button--primery" type="submit">
                        Place an order
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';
import numberFormat from '@/helpers/numberFormat';

export default {
    components: {CartItem},
    filters: {numberFormat},
    computed: {
        ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice'}),
    }
}
</script>