<template>
  <component :is="currentPageComponent" :page-params="currentPageParams" />
</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = {
  main: 'MainPage',
  product: 'ProductPage'
};

export default {
    data() {
        return {
            currentPage: "main",
            currentPageParams: {}
        };
    },
    computed: {
      currentPageComponent(){
        return routes[this.currentPage] || 'NotFoundPage';
      }
    },
    components: { ProductPage, MainPage, NotFoundPage }
}
</script>


