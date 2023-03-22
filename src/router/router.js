import MainPage from "../components/main-page/MainPage.vue"
import CatalogPage from "../components/catalog-page/CatalogPage.vue"
import AboutPage from "../components/about-page/AboutPage.vue"
import SalePage from "../components/sale-page/SalePage.vue"
import ProductCardPage from "../components/product-card-page/ProductCardPage.vue"
import AccountPage from "../components/account-page/AccountPage.vue"

import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/catalog",
        component: CatalogPage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/sale",
        component: SalePage
    },
    {
        path: "/product-card/:id",
        name: 'pr-card',
        component: ProductCardPage
    },
    {
        path: "/account",
        component: AccountPage,
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

export default router;