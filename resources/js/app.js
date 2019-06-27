
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//Импорт vue-роутера
import VueRouter from 'vue-router';

//Импорт собственного маршрутизатора
import router from './router';

//Импорт корневого компонента
//import App from "./components/App";
import App from "./components/api/App";
import Dashboard    from "./components/api/Board";
import Login        from "./components/api/Login";
import Register     from "./components/api/Register";
import Home         from "./components/api/Welcome";
import Logout        from "./components/api/Logout";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
 
 
Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);
 

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//const app = new Vue({
//    el: '#app-lte',
    //компонент, который будет рендериться в начальный момент времени
//    render : h => h(App),
//    router
//});

const app = new Vue({
    el: '#app',
    //Компонент, который будет рендериться в начальный момент времени
    render : h => h(App),
    router
});
