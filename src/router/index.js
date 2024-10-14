import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/LoginPage.vue'; // นำเข้า Login component

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/HeaderMenu.vue'), // ตัวอย่างหน้าแรก
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    // เพิ่มเส้นทางอื่น ๆ ที่คุณต้องการ
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
