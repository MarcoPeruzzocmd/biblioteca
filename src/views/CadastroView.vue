<script setup>
import { ref, computed } from "vue"
import { RouterLink } from "vue-router";
const cor = ref()
const texto = ref("CPF do responsável")

function trocarTexto(){
    console.log(texto.value)
    texto.value = texto.value == "CPF do responsável" ? "CPF do aluno" : "CPF do responsável"
}

</script>
<template>
    <div class="container">
        <form action="" class="cadastro" @submit.prevent>
            <h1>CADASTRO</h1>
            <h3>Você é:</h3>
            <div class="EstudanteResponsavel">
            <button class="responsavel" @click="trocarTexto()">Responsavel</button>
            <button class="estudante" @click="trocarTexto()">Estudante</button>
        </div>
            <label for="Nome">Nome</label>
            <input type="text" placeholder="Nome">
            <label for="Email">Email</label>
            <input type="email" name="" id="" placeholder="Email">
            <label for="Senha">Senha</label>
            <input type="password" name="" id="" placeholder="Senha">
            <label for="Confirme senha">Confirme a senha</label>
            <input type="password" name="" id="" placeholder="Confirme sua senha">
            <label for="CPF">CPF</label>
            <input type="text" name="" id="" placeholder="CPF">
            <label for="CPF do responsável">{{texto}}</label>
            <input type="text" name="" id="" placeholder="CPF do responsável">
            <button class="BotaoCadastro">Cadastrar</button>
            <RouterLink to='/login'> Não tem conta?</RouterLink>
        </form>
    </div>
</template>
<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    text-align: center;
    margin: 72px;
    color: #656565;
    font-family: "League Spartan", sans-serif;

}
h3{
    text-align: center;
    font-family: "League Spartan", sans-serif;
}
form.cadastro{
    display: flex;
    flex-direction: column;
}
input {
    width: 450px;
    height: 46px;
    border-radius: 20px;
    border-color: rgb(255, 255, 255);
    opacity: 0.5;
    border-width: 1px;
    padding: 0 10px; 
    font-size: 16px;
    border: solid 2px;
}
.BotaoCadastro{
    border-radius: 40px;
    background-color: #8FD085;
    width: 247px;
    height: 46px;
    border: none;
    margin: 51px auto;
    font-family: "League Spartan", sans-serif;
    font-size: 15px;
}
.BotaoCadastro:hover{
    background-color: #2b6a22;
}
label{
    margin: 14px 0;
    font-family: "League Spartan", sans-serif;
}
a{
    text-align: center;
    color: #656565;
}
.responsavel{
    background-color: #D9D9D9;
    width: 145px;
    height: 46px;
}
.estudante{
    background-color: #8FD085;
    width: 145px;
    height: 46px;
}
.EstudanteResponsavel > button{
    border-radius: 20px;
    border: none;
    margin: 0 10px;
}
.EstudanteResponsavel > .responsavel:hover{
    background-color: #454343;
}
.EstudanteResponsavel > .estudante:hover{
    background-color: #2b6a22;
}
.EstudanteResponsavel{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

</style>