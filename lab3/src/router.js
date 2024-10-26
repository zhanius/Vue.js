// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import MyProfile from "@/views/MyProfile.vue";
import Favorites from "@/components/Favorites.vue";
import Authorization from "@/components/Authorization.vue";
import Reviews from "@/views/Reviews.vue";
import UpdateInfo from "@/views/UpdateInfo.vue";
import UserProfile from "@/views/UserProfile.vue";

const routes = [
    {
        path: '/user/:id',
        name: 'UserProfile',
        component: UserProfile,
        props: true
    },
    { path: '/my-profile', component: MyProfile },
    { path: '/authorization', component: Authorization },
    { path: '/reviews', component: Reviews },
    { path: '/update-info', component: UpdateInfo },
    { path: '/favorites', component: Favorites },
    { path: '/', redirect: '/reviews', component: Reviews },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
