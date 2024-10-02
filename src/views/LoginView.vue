<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="container">
    <form id="login" action="" @submit.prevent="this.$router.push('/')">
        <h1>LOGIN</h1>
        <label for="email">Email:</label>
        <input type="email" placeholder="Email" required>
        <label for="senha">Senha:</label>
        <input type="password" placeholder="Senha" required>
        <button id="botaoEntrar" type="submit"><span class="entrar">Entrar</span></button>
        <RouterLink to='/cadastro'> Não tem conta?</RouterLink>
    </form>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    text-align: center;
    margin: 92px;
    color: #656565;
    font-family: "League Spartan", sans-serif;

}
#login{
    display: flex;
    flex-direction: column;
}
input {
    width: 450px;
    height: 56px;
    border-radius: 20px;
    border-color: rgb(255, 255, 255);
    opacity: 0.5;
    border-width: 1px;
    padding: 0 10px;
    font-size: 16px; 
    border: solid 2px;
}
#botaoEntrar{
    border-radius: 40px;
    background-color: #8FD085; 
    width: 247px;
    height: 56px;
    border: none;
    margin: 51px auto;
    font-family: "League Spartan", sans-serif;
}
#botaoEntrar:hover{
    background-color: #2b6a22;
}

.entrar{
    color: #222121;
    font-size: 20px;
}
label{
    margin: 16px 0;
    font-family: "League Spartan", sans-serif;
}
a{
    text-align: center;
    color: #656565;
}


</style>