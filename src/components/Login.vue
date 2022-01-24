<template>
        <div id="login">
            <div class='main'>
                <div class='links'>
                    <a href="#" class='link' @click.prevent="changeAction('login')">Login</a>
                    <a href="#" class='link2' @click.prevent="changeAction ('register')" >Cadastro</a>
                </div>
                <transition name='fade-login' mode='out-in'>
                    
                    <div class="login" v-if="action == 'login'" key='login'>
                        <div class="card-header">
                            <h2 class='header-card'>Login</h2>
                        </div>
                        <form method='post' class="comeco">
                            
                            <div class="card-content-area">
                                <label for="usuario" >Usuário</label>
                                <input type="email" class="form-control" placeholder="Digite seu email" v-model="user.email">
                            </div>

                            <div class="card-content-area">
                                <label for="password">Senha</label>
                                <input type="password" class="form-control" placeholder="Digite sua senha" v-model="user.password">                                
                            </div>

                            <div class="card-content-area">
                                <div class="col-8">
                                    <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Lembrar de mim
                                    </label>
                                    </div>
                            </div>
                            </div>   
                            
                
                            <div class="footer">

                                <input type="submit" value="Login" class="submit" @click.prevent.stop="login">

                                <a href="#" class="recuperar_senha">Esqueceu a senha?</a>
                            </div>
                            
                        </form>
                    </div>
                    <div class="register" v-else key='register'>
                        <h2><p class="login-box-msg">Cadastro</p></h2>
                    
                    <form action="#" method="post" class="comeco2">
                        <div class="input-group">Nome
                        <input type="text" class="form-control" placeholder="Digite seu nome" v-model='usercreate.nome'>
                        </div>
                        <div class="input-group">E-mail
                        <input type="email" class="form-control" placeholder="Digite seu email" v-model='usercreate.email'>
                        </div>
                        <div class="input-group">Senha
                        <input type="password" class="form-control" placeholder="Digite sua senha" v-model='usercreate.password'>
                        </div>  
                        <div class="input-group">Senha
                        <input type="password" class="form-control" placeholder="Confirme sua senha" v-model='usercreate.confirmpassword'>
                        </div>  
                        <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                            <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                            <label for="agreeTerms">
                            Eu concordo com os <a href="#">termos</a>
                            </label>
                            </div>
                            
                        </div>
                        <button type="submit" class="btn-cadastrar" @click.prevent="register">Cadastrar</button>
                        
                    </div>
                    </form>
                    </div>
                </transition>
            </div>
        </div>
        
</template>

<script>
    import * as fb from '@/plugins/firebase'
    export default {
    data(){
        return {
            action: 'login',
            user:{},
            usercreate:{},
            error: false,
        }
    },
    methods: {
        changeAction(action) {
        this.action = action; 
},
            async login(){
                try {
                    await fb.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
                    this.$router.push({name:'home'})
                } catch(error) {
                    const errorCode = error.code
                    switch(errorCode){
                        case 'auth/wrong-password':
                            window.alert('A senha está errada!')
                            break
                        case "auth/invalid-email":
                            this.$swal({title: 'O email é inválido!', icon:'error'})
                            break
                        case "auth/user-not-found":
                            if(confirm('O usuário não foi encontrado, deseja criar uma nova conta?')){
                                this.changeAction('register')
                            }
                            break
                    }
                }
            },
            async register(){
                try {
                    await fb.auth.createUserWithEmailAndPassword(this.usercreate.email, this.usercreate.password)
                    this.$router.push({name: 'home'})
                }catch(error){
                    console.log(error)

                }
            }
         
        },
        name: 'Login',

    }
</script>