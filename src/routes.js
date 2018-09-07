// 官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

// 自訂的分頁元件
import MainPage from './pages/main/main.vue';

import NotFoundPage from './pages/not-found.vue';

import VendorPage from './pages/vendor.vue';
import GameDetailPage from './pages/game-detail.vue';

import ThemePage from './pages/theme.vue';
import ColorPage from './pages/color.vue';

import GoldenfPage from './pages/goldenf.vue';
import PartnerPage from './pages/partner.vue';
import WebPage from './pages/web.vue';
import PrivacyPage from './pages/privacy.vue';

Vue.use(VueRouter);


export default [{
        tabId: '首頁',
        path: '/',
        component: MainPage,
    },
    {
        tabId: 'Vendor',
        path: '/vendor/:vendor',
        component: VendorPage,
    },
    {
        tabId: 'GameDetail',
        path: '/vendor/:vendor/:game',
        component: GameDetailPage,
    },
    {
        tabId: 'Theme',
        path: '/setting/theme',
        component: ThemePage,
    },
    {
        tabId: 'Color',
        path: '/setting/color',
        component: ColorPage,
    },
    {
        tabId: 'GoldenF',
        path: '/about/goldenf',
        component: GoldenfPage,
    },
    {
        tabId: 'Partner',
        path: '/about/partner',
        component: PartnerPage,
    },
    {
        tabId: 'Web',
        path: '/about/web',
        component: WebPage,
    },
    {
        tabId: 'Privacy',
        path: '/about/privacy',
        component: PrivacyPage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];