<template>
    <ul class="catalog__list">
        <li class="catalog__item">
            <ProductItem v-for="product in products" :product="product"/>
        </li>
    </ul>
</template>


<script>
import ProductItem from './ProductItem.vue';
import products from '@/data/products';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {ProductItem},
};
</script>