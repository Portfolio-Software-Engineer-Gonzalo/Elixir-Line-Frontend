import { createRouter, createWebHistory } from 'vue-router';
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";
import LayoutElixirLineComponent from "../elixir-line/main-content/pages/layout-elixir-line.component.vue";
import signInComponent from "../elixir-line/security/pages/sign-in.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [

        //ruta por defecto para redirigir a la página de inicio home-elixir line
        {path: '/:pathMatch(.*)*', redirect: '/elixir-line/login'},
        {path: '/page-not-found',       name: 'PageNotFound',             component: PageNotFoundComponent,            meta: { title: 'Page Not Found' }},


        {path: '/elixir-line/login' , name: 'Login', component: signInComponent, meta: { title: 'Login'}},


        {path: '/home', name: 'Home', component: LayoutElixirLineComponent, meta: { title: 'Home'}},


        // Add your routes here as an array of objects with the following properties: path, name, component and meta
        // (optional)


    ]
});




router.beforeEach((to, from, next) => {

    // Add your code here to handle the navigation guards

        let baseTitle = 'Elixir Line';
        document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})


export default router;