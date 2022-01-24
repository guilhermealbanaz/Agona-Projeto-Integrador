<template>
    <div>
    <link rel="stylesheet" href="CSS/Estilo.css">
    <nav class="menu">
        <img class="imagem-titulo" src="images/Agona.png" alt="">
        <router-link to="/" class='bt'>Home</router-link>
        <router-link :to="{name: 'comunidades'}" class='bt'>Comunidades</router-link>
        <router-link :to="{name: 'sobre'}" class='bt'>Sobre</router-link>
        
    </nav>
    <div class="box-imagem">
        <img class="perfil" src="images/Icone Agona.png" alt="">
    </div>
    <div class="box-perfil">
        <h2 class="text-green">Perfil</h2>
         <p class="text-white">{{nome}}</p>  <!-- ou user, caso a pessoa não esteja logado  -->
        <button @click.prevent="logout" class="link-perfil text-white">Gerenciar Perfil</button>
    </div>
    </div>
</template>

<script lang="ts">
    import * as fb from '../plugins/firebase.js'
    export default {
        name: "AppHeader",
        methods:{
            logout(){
                fb.auth.signOut()
                this.$router.push({name: 'login'})
            },

        }
    }
    
</script>