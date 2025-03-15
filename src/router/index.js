import { createRouter, createWebHistory } from 'vue-router';
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [


        {path: '/page-not-found',       name: 'PageNotFound',             component: PageNotFoundComponent,            meta: { title: 'Page Not Found' }},


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