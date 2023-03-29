<template>
    <ul class="catalog__list">
        <ProductItem v-for="(product, index) in products" :product="product" :key="index"/>
    </ul>
</template>


<script>
import ProductItem from './ProductItem.vue';
import products from '@/data/products';

export default {
  name: 'ProductList',
  props: ['products'],
  props: ['ProductItem'],
  components: {ProductItem},
  data() {
        return {
           products,
           ProductItem
        }
    }
};
</script>