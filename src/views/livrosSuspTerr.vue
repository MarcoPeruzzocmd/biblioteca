<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <HeaderComponent />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet">
    <h1 class="titulo">SUSPENSE E TERROR</h1>
    <div class="livros1">
        <div class="livro1">
            <div class="imagem"></div>
            <div class="contentLivro">
                <div class="textContent">
                    <h2>LIVRO 1</h2>
                    <p class="disp">disponível</p>
                </div>
                <div class="classificacao"><img src="/public/indicacaoLivre.png" alt="Indicação Livre"></div>
            </div>
        </div>
        <div class="livro1">
            <div class="imagem"></div>
            <div class="contentLivro">
                <div class="textContent">
                    <h2>LIVRO 2</h2>
                    <p class="indisp">indisponível</p>
                </div>
                <div class="classificacao"><img src="/public/indicacao16.png" alt="Indicação 16 anos"></div>
            </div>
        </div>
        <div class="livro1">
            <div class="imagem"></div>
            <div class="contentLivro">
                <div class="textContent">
                    <h2>LIVRO 3</h2>
                    <p class="disp">disponível</p>
                </div>
                <div class="classificacao"><img src="/public/indicacao18.png" alt="Indicação 18 anos"></div>
            </div>
        </div>
    </div>
    <div class="livros1">
        <div class="livro1">
            <div class="imagem"></div>
            <div class="contentLivro">
                <div class="textContent">
                    <h2>LIVRO 4</h2>
                    <p class="indisp">indisponível</p>
                </div>
                <div class="classificacao"><img src="/public/indicacaoLivre.png" alt="Indicação Livre"></div>
            </div>
        </div>
        <div class="livro1">
            <div class="imagem"></div>
            <div class="contentLivro">
                <div class="textContent">
                    <h2>LIVRO 5</h2>
                    <p class="disp">disponível</p>
                </div>
                <div class="classificacao"><img src="/public/indicacao16.png" alt="Indicação 16 anos"></div>
            </div>
        </div>
        <div class="livro1">
            <div class="imagem"></div>
            <div class="contentLivro">
                <div class="textContent">
                    <h2>LIVRO 6</h2>
                    <p class="indisp">indisponível</p>
                </div>
                <div class="classificacao"><img src="/public/indicacao18.png" alt="Indicação 18 anos"></div>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>

<style scoped>
h2 {
    color: #BF85E2;
}

.titulo{
    text-align: center;
    color: #BF85E2;
    margin: 0 0 3rem 0;
}

.livros1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 2rem;
}

.imagem {
    width: 100%;
    height: 350px;
    background-color: #D9D9D9;
    border-radius: .5rem;
}

.livro1 {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 380px;
    border: #BF85E2 5px solid;
    border-radius: 16px;
}

.contentLivro {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
}

.textContent {
    display: flex;
    flex-direction: column;
    width: 70%;
}

h2 {
    margin: .5rem 0 0 0;
}

p {
    margin: 0;
}

.classificacao {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 37px;

}

.classificacao>img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
}

.disp {
    color: #4FBD3D;
    font-size: 25px;
}

.indisp {
    color: #FF517B;
    font-size: 25px;
}
</style>