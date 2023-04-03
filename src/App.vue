<template>
  <div>

   <header class="header">
      <div class="header__wrapper container">
        <span class="header__info">Catalog</span>

        <a class="header__logo" href="#">
          <img src="img/logo.png" alt="Логотип интернет магазина Технозавррр" width="55" height="55"><p style="color:white">ECO Clothes</p>
        </a>

        <a class="header__tel" href="tel:8 800 600 90 09">
          8 800 600 90 09
        </a>

        <CartIndicator />

       
      </div>
   </header>


    <router-view />

    <footer class="footer">
      <div class="footer__wrapper container">
        <ul class="footer__links">
          <li>
            <a class="footer__link" href="#">
              Catalog
            </a>
          </li>
          <li>
            <a class="footer__link" href="tel:88006009009">
              8 800 600 90 09
            </a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technozavrrr.com">
              hi@ecoclothes.com
            </a>
          </li>
          <li>
            <a class="footer__link" href="#">
              Sales
            </a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">
              Request a call
            </a>
          </li>
        </ul>

        <ul class="footer__social social">
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Инстаграм">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <p class="footer__desc">
          All rights to&nbsp;materials located on& the&nbsp;site are& protected by&nbsp;law, 
          including copyright and related rights.
        </p>
      
        <ul class="footer__data">
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
              Privacy Policy
            </a>
          </li>
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
              Public offer
            </a>
          </li>
        </ul>

        <span class="footer__copyright">
          © 2023 EcoClothes
        </span>
      </div>
    </footer>

  </div>


</template>

<script>
import router from './router';
import CartIndicator from '@/components/CartIndicator.vue';



export default {
    components: { router, CartIndicator }
}
</script>


