<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">Treclon</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-link"> Hi, There</li>
                    </ul>
                    
                    <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                        <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">Login</router-link>
                        <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">Register</router-link>
                        <li class="nav-link" v-if="isLoggedIn"> Hi, {{name}}</li>
                        <router-link :to="{ name: 'board' }" class="nav-link" v-if="!isLoggedIn">Board</router-link>
                        <router-link :to="{ name: 'logout' }" class="nav-link" v-if="isLoggedIn">Logout</router-link>
                    </ul>
                    
                </div>
            </div>
        </nav>
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isLoggedIn : null,
                name : null
            }
        },
        mounted(){
            //localStorage.removeItem('jwt');
            console.log('App примонтирован')
            this.isLoggedIn = localStorage.getItem('jwt')
            this.name = localStorage.getItem('user')
        }
    }
</script>