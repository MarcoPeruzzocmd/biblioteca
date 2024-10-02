<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const showMenu = ref(false)
</script>
<template>
    <header>
        <div>
            <h1 @click="this.$router.push('/')">BIBLIOTECA</h1>
        </div>
        <div class="barra">
            <img src="/public/lupaPesquisa.svg" alt="Ícone de pesquisa" class="icon">
            <input type="pesquisa" name="pesquisa" placeholder="Buscar">
        </div>
        <div class="menu" @click="showMenu = !showMenu">
            <img src="/public/menu.svg" alt="icone menu" class="menuC">
        </div>
        <div class="menuSelection" v-if="showMenu">
            <div class="fundo">
                <ul class="menu-list">
                    <li class="menu-item">GÊNEROS</li>
                    <li class="submenu-item" @click="this.$router.push('/susTerror')">• SUSPENSE & TERROR</li>
                    <li class="submenu-item" @click="this.$router.push('/aventura')">• AVENTURA</li>
                    <li class="submenu-item" @click="this.$router.push('/romance')">• ROMANCE</li>
                    <li class="submenu-item" @click="this.$router.push('/diversos')">• ESTUDOS DIVERSOS</li>
                    <li class="menu-item">EMPRESTADOS</li>
                    <li class="menu-item">SOBRE NÓS</li>
                </ul>
                <button class="login-button" @click="this.$router.push('/login')">LOGIN</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
.menuSelection{
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 20vw;
    right: 0;
    margin-top: 120px;
}
.fundo{
    width: 300px;
    background-color: #5A7851;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
}

.menu-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
    text-align: center;
}

.menu-item {
    margin: 20px 0;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 2px;
}

.submenu-item {
    margin: 10px 0;
    font-size: 16px;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}

.submenu-item:hover {
    background-color: #FFFFFF;
    color: #5A7851;
}

.login-button {
    margin-top: 40px;
    padding: 10px 20px;
    background-color: #FFFFFF;
    color: #5A7851;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
}

.login-button:hover {
    background-color: #E8E8E8;
}

.menuC {
    width: 50px;
    height: 50px;
    margin-top: 40px;
    margin-right: 130px;
    cursor: pointer;
    user-select: none;
}

header {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 120px;
    margin: 0 0 3rem 0;
    background-color: #8FD085;
}

header div h1 {
    margin-top: 3rem;
    letter-spacing: 5px;
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
}

header div h1:hover{
    text-decoration: underline;
}

.barra {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 20px;
}

.barra img.icon {
    width: 20px;
    height: auto;
    position: absolute;
    left: 10px;
    user-select: none;
}

.barra input {
    padding-left: 40px;
    width: 100%;
    max-width: 300px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
    background-color: #8FD085;
    color: white;
    font-size: 16px;
    user-select: none;
}

.barra input::placeholder {
    color: white;
    font-size: 15px;
}


@media (max-width: 768px) {
    .barra input {
        max-width: 250px;
        padding-left: 35px;
    }
}

@media (max-width: 480px) {
    .barra input {
        max-width: 200px;
        padding-left: 30px;
    }
}
</style>