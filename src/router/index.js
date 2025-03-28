import { createRouter, createWebHistory } from 'vue-router';
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";
import LayoutElixirLineComponent from "../public/pages/layout-elixir-line.component.vue";
import InventoryManagementComponent from "../elixir-line/inventory-management/pages/inventory-management.component.vue";
import SignInComponent from "../elixir-line/security/pages/sign-in.component.vue";
import CustomerManagementComponent from "../elixir-line/customer-management/pages/customer-management.component.vue";
import ProductManagementComponent from "../elixir-line/product-management/pages/product-management.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [

        //ruta por defecto para redirigir a la página de inicio home-elixir line
        {path: '/:pathMatch(.*)*', redirect: '/elixir-line/login'},

        {path: '/page-not-found',           name: 'PageNotFound',             component: PageNotFoundComponent,            meta: { title: 'Page Not Found' }},

        {path: '/elixir-line/login' ,       name: 'Login', component: SignInComponent, meta: { title: 'Login'}},


        {
            path: '/home', component: LayoutElixirLineComponent,
            children:[
                {path: '/vitivinicultor/supplies',      name: 'Inventory of supplies', component: InventoryManagementComponent,     meta: { title: 'Supplies'}},
                {path: '/vitivinicultor/customers' ,    name: 'Customers',              component: CustomerManagementComponent,     meta: { title: 'Customers'}},
                {path: '/vitivinicultor/products',      name: 'Products',               component: ProductManagementComponent,      meta: { title: 'Products'}},

            ],meta: { title: 'Home'},

        },





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