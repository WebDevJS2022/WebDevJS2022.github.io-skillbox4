<template>
    <main class="content container">
        <div class="content__top">
            <ul class="breadcrumbs">
                <li class="breadcrumbs__item">
                    <!-- <router-link tag="button" class="breadcrumbs__link" :to="{name: 'main'}"> ДЛЯ КНОПКИ -->
                    <router-link class="breadcrumbs__link" :to="{name: 'main'}">
                        Catalog
                    </router-link>
                </li>
                <li class="breadcrumbs__item">
                    <!-- <a class="breadcrumbs__link" @click.prevent="$router.push({name: 'main'})"> --PUSH МЕТОД -->
                    <router-link class="breadcrumbs__link" :to="{name: 'main'}">
                        {{ category.title }}
                    </router-link>
                </li>
                <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link">
                        {{ product.title }}
                    </a>
                </li>
            </ul>
        </div>

        <section class="item">
            <div class="item__pics pics">
                <div class="pics__wrapper">
                    <img width="570" height="570" :src="product.image" :alt="product.title">
                </div>
            </div>

            <div class="item__info">
                <span class="item__code">Артикул: {{ product.id }}</span>
                <h2 class="item__title">
                    {{ product.title }}
                </h2>
                <div class="item__form">
                    <form class="form" action="#" method="POST" @submit.prevent="addToCart">
                        <b class="item__price">
                            {{ product.price | numberFormat }} $
                        </b>

                        <fieldset class="form__block">
                            <legend class="form__legend">Color:</legend>
                            <ul class="colors">
                                <li class="colors__item">
                                    <label class="colors__label">
                                        <input class="colors__radio sr-only" type="radio" name="color-item" value="blue"
                                            checked>
                                        <span class="colors__value" style="background-color: #73B6EA;">
                                        </span>
                                    </label>
                                </li>
                                <li class="colors__item">
                                    <label class="colors__label">
                                        <input class="colors__radio sr-only" type="radio" name="color-item" value="yellow">
                                        <span class="colors__value" style="background-color: #FFBE15;">
                                        </span>
                                    </label>
                                </li>
                                <li class="colors__item">
                                    <label class="colors__label">
                                        <input class="colors__radio sr-only" type="radio" name="color-item" value="gray">
                                        <span class="colors__value" style="background-color: #939393;">
                                        </span></label>
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset class="form__block">
                            <legend class="form__legend">Size:</legend>

                            <ul class="sizes sizes--primery">
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="32">
                                        <span class="sizes__value">
                                            S
                                        </span>
                                    </label>
                                </li>
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="64">
                                        <span class="sizes__value">
                                            M
                                        </span>
                                    </label>
                                </li>
                                <li class="sizes__item">
                                    <label class="sizes__label">
                                        <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128"
                                            checked>
                                        <span class="sizes__value">
                                            L
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </fieldset>

                        <div class="item__row">
                        
                               

                            <FormCounter v-model="productAmount" :amount="productAmount" />

                         

                            <button class="button button--primery" type="submit">
                                To cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="item__desc">
                <ul class="tabs">
                    <li class="tabs__item">
                        <a class="tabs__link tabs__link--current">
                            Description
                        </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#">
                            Characteristics
                        </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#">
                            Guarantee
                        </a>
                    </li>
                    <li class="tabs__item">
                        <a class="tabs__link" href="#">
                            Payment and delivery
                        </a>
                    </li>
                </ul>

                <div class="item__content">
                    <p>
                        GPS, GLONASS, BEIDOU Galileo and QZSS navigation<br>
                        Synchronization with your smartphone<br>
                        Bluetooth Smart, ANT+ and Wi-Fi communication<br>
                        Support for third-party applications<br>
                    </p>

                    <a href="#">
                        All characteristics
                    </a>

                    <h3>What is it?</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem eveniet maiores optio laborum, soluta adipisci odio dolore debitis labore at repellat cumque reiciendis hic tempore eos aliquam perspiciatis a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, repellat neque. Placeat aliquam, magni eaque voluptatum incidunt unde tempore, accusamus, aut officia animi esse et! Mollitia ex optio voluptate a.
                    </p>

                    <h3>Design</h3>

                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem quod quae rem optio. Perferendis earum iste debitis incidunt quod veritatis rerum distinctio dignissimos quae enim, obcaecati vitae ipsam ullam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero a cupiditate eligendi! Quod magnam quasi quos magni tempora impedit harum, cupiditate voluptas, temporibus, expedita soluta vero enim. Corrupti, odio totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis corrupti quaerat provident ullam tempore natus incidunt excepturi quam, magnam minima architecto quo impedit porro fugiat iste! Debitis ex similique doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestiae assumenda nihil! Sequi quidem fugiat doloremque, necessitatibus itaque, corrupti dolorum voluptate aspernatur rem accusamus ad, suscipit sit amet in molestiae?
                   </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import products from '@/data/products';
import categories from '@/data/categories';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import FormCounter from '@/components/FormCounter.vue';

export default {
    components: {
        FormCounter
    },
    data(){
        return {
            productAmount: 1
        };
    },
    filters: {
        numberFormat
    },
    computed: {
        product(){
            return products.find(product => product.id === +this.$route.params.id);
        },
        category(){
            return categories.find(category => category.id === this.product.categoryId);
        }
    },
    methods: {
            gotoPage,
            addToCart(){
                this.$store.commit(
                    'addProductToCart',
                    {productId: this.product.id, amount: this.productAmount}
                );
            }
        }
}
</script>