import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductPage from "@/pages/ProductPage";

Vue.use(VueRouter); //Сообщаем Vue, что будем использовать VueRouter

const routes = [ //Добавляем маршруты
    {name: 'main', component: MainPage, path: '/'},
    {name: 'product', component: ProductPage, path: '/product/:id'},
    {name: 'cart', component: CartPage, path: '/cart'},
    {name: 'notFound', component: NotFoundPage, path: '*'},
];

const router = new VueRouter({
    routes, //Подключаем массив маршрутов
}); // Создаём новый экземпляр VueRouter

export default router; // Экспортируем VueRouter