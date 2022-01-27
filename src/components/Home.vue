<template>
    <main class="corpo">
        <div class="container-menu">
        </div>
        <div class="main">
            <div class="menu-lat">
                <h1 class="titulo-menu">Comunidades Destaque:</h1>
                <div class="box-menu texto-comuni-destaque">Comunidade: Rocket League</div>
                <div class="box-menu texto-comuni-destaque">Comunidade: Valorant</div>
                <div class="box-menu texto-comuni-destaque">Comunidade: Counter Strike</div>
                <div class="box-menu texto-comuni-destaque">Comunidade: GTA</div>
                <div class="box-menu texto-comuni-destaque">Comunidade: Dark Souls</div>
            </div>
            <div class="container-home">
                <div class="box-home" v-for='(dica, index) in dicas' :key='index'>
                    <div class="box-conteudo-home">
                        <img class="imagem-home" :src="require(`../../public/images/paginaHome/${dica.img}.png`)" alt=""></div>
                    <h3 class="text-white text-conteudo-home">{{dica.content}}</h3>
                    <br>
                    <p class="text-green text-filtro-conteudo">Filtros: {{dica.filters}}</p>
                </div>
        </div>
        </div>
    </main>
</template>

<script>
    import * as fb from "../plugins/firebase.js"
    export default {
    data() {
        return {
        dicas: [],
        }
    },
    async created() {
        fb.db.collection('comments').get().then( comment => {
            comment.docs.forEach( doc => {
                this.dicas.push(doc.data())
            })
        }).catch( error => {
            console.error(error)
        })
    }
    };
</script>