import VueRouter from 'vue-router';

//Импорт компонента
//import Users from './components/Users';
//import Adminlte from './components/Adminlte';
import Welcome from './components/api/Welcome';
import Dashboard    from "./components/api/Board";
import Login        from "./components/api/Login";
import Logout        from "./components/api/Logout";
import Register     from "./components/api/Register";
import Home         from "./components/api/Welcome";


//Экспорт объекта VueRouter (который импортировали выше)
//В него передаем Литерал-Объект
export default new VueRouter({
    //В массиве routes в виде объектов будут перечислены маршруты (пути и связанные с ними конпоненты)
    routes : [
        {
            path: '/',
            name: 'home',
            component: Welcome
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/board',
            name: 'board',
            component: Dashboard,
        },
        //{
        //    path: '/users',
        //    component : Users
        //},
        //{
        //    path: '/',
        //    component : Adminlte
        //},
        
    ],
    //Запись всех перемещений пользователя по переходам
    mode: 'history'
    
});