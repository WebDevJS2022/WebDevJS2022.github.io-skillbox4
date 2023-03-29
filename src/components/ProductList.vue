<template>
    <ul class="catalog__list">
        <ProductItem v-for="(product, index) in products" :product="product" :key="index"/>
    </ul>
</template>


<script>
import ProductItem from './ProductItem';
import products from '@/data/products';

export default {
  name: 'ProductList',
  props: ['products'],
  components: {ProductItem},
  data() {
        return {
           ProductItem
        }
    }
};
</script>