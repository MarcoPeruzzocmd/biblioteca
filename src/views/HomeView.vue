<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <HeaderComponent />
  <div class="cinema">
    <div class="juntosC">

      <h2 class="Lcinema">LIVROS</h2>
      <div class="bioC">
        <p class="clean">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur iste quis sint quos tenetur possimus
          quasi
          labore! Magni dolore nostrum quidem dolorem error iure, dolores temporibus explicabo necessitatibus ab
          minus.
          ima inventore animi totam aspernatur cupiditate. Laboriosam qui cupiditate nemo mollitia praesentium.
          Nesciunt, qui? Ex aspernatur doloribus aliquam obcaecati minus esse mollitia!
        </p>
        <div class="Lcontainer"></div>
      </div>
    </div>
  </div>
  <div class="together">
    <div class="novidade">
      <h2 class="tittle">Novidade</h2>
      <div class="container">
        <div class="livroN"></div>
        <div class="livro1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus, ducimus
          aliquam perferendis quidem iure natus corporis, voluptatibus vero amet doloremque est, unde reprehenderit
          distinctio. Rerum maxime debitis aut minus?</div>
      </div>
    </div>
    <div class="melhoresL">
      <h1 class="tittleN">1 Best seller</h1>
      <div class="container2">
        <div class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores debitis amet ipsa
          accusamus earum, fugit perferendis velit id soluta temporibus illo! Ullam, error!</div>
        <div class="imagem"></div>
      </div>
    </div>
  </div>
  <div class="MaisE">Mais Emprestados</div>
  <div class="container3">
    <div class="LivrosME1">
      <div class="together2">
        <div class="L1"></div>
        <div class="clean2">
        <h2>Livros</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis nostrum totam nihil suscipit
          repellendus animi consequuntur nemo ipsa, culpa exercitationem delectus! Corporis molestiae minus qui
          expedita! Ratione, doloremque itaque.</p>
        </div>
      </div>
    </div>
    <div class="LivrosME2">
      <div class="together2">
        <div class="L1"></div>
        <h2>Livros</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis nostrum totam nihil suscipit
          repellendus animi consequuntur nemo ipsa, culpa exercitationem delectus! Corporis molestiae minus qui
          expedita! Ratione, doloremque itaque.</p>
      </div>
    </div>
    <div class="LivrosME3">
      <div class="together2">
        <div class="L1"></div>
        <h2>Livros</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis nostrum totam nihil suscipit
          repellendus animi consequuntur nemo ipsa, culpa exercitationem delectus! Corporis molestiae minus qui
          expedita! Ratione, doloremque itaque.</p>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<style scoped>

.clean{
  padding-top: 20px;
}

.LivrosME1 {
  width: 340px;
  height: 670px;
  background-color: #D08585;
  border-radius: 20px;
}

.LivrosME2 {
  width: 340px;
  height: 670px;
  background-color: #F0C65B;
  border-radius: 20px;
}

.LivrosME3 {
  width: 340px;
  height: 670px;
  background-color: #85B5D0;
  border-radius: 20px;
}

.L1 {
  width: 280px;
  height: 370px;
  background-color: #D9D9D9;
  border-radius: 10px;
}

.together2 {
  margin: 25px 28px 0 28px;
  color: #FFFFFF;
}

.container3 {
  display: flex;
  gap: 5rem;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 70px;
}

.MaisE {
  font-size: 40px;
  margin-top: 180px;
  text-align: center;
  color: #D08585;
}

.novidade {
  background-color: #85B5D0;
  width: 450px;
  height: 350px;
  border-radius: 1rem;
  padding-left: 38px;
  color: #FFFFFF;
}

.livroN {
  background-color: #D9D9D9;
  width: 180px;
  height: 250px;
  border-radius: 1rem;
}

.container2 {
  display: flex;
  gap: 2rem;
  padding-top: 30px;
}

.imagem {
  background-color: #D9D9D9;
  width: 270px;
  height: 130px;
  border-radius: 10px;
}

.bio {
  width: 180px;
  height: 250px;
  padding-left: 50px;
}

.tittle {
  text-align: center;
  font-size: 25px;
  margin: .5rem 0 1rem 0;
}

.tittleN {
  text-align: center;
  font-size: 90px;
  margin: .5rem 1rem 1rem 0;
  margin-top: 20px; 
}

.container {
  display: flex;
  width: 100%;
  gap: 1rem;
  padding-top: 20px;
}

.livro1 {
  width: 180px;
  height: 250px;
}

.melhoresL {
  width: 571px;
  height: 350px;
  border: #F0C65B solid;
  border-radius: 1rem;
  color: #FFE999;
  font-size: 455px 130px;
  margin-left: 45px;
}

.together {
  display: flex;
  margin-left: 318px;
  margin-top: 45px;
}

.cinema {
  width: 1060px;
  height: 300px;
  background-color: #D08597;
  border-radius: 0.5rem;
  margin-left: 350px;
  margin-top: 40px;
}

.Lcontainer {
  width: 800px;
  height: 150px;
  background-color: #D9D9D9;
  border-radius: 10px;
}

.bioC {
  display: flex;
}

.juntosC {
  padding: 50px 160px 0 160px;
  color: #FFFFFF;
}

input {
  border-radius: 10px;
  border: #FFFFFF solid;
  background-color: #8FD085;
  width: 300px;
  height: 18px;
}

input::placeholder {
  color: white;
  font-size: 15px;
}

input:before {
  border: none
}

</style>