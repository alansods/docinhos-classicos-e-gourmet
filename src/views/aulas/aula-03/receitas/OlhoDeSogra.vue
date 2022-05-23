<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[5].nome }}
      </h3>
      <!-- <div class="container-icones">
        <div class="icone">
          <img
            src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
          />
          <span>25min</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/porcoes.png" />
          <span>8 porções de 150g</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/dificuldade.png" />
          <span>fácil</span>
        </div>
      </div> -->
      <hr class="border-t-1 border-gray-300 my-5" />
      <div class="mt-10">
        <div class="rounded-lg">
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <youtube
              video-id="4-EW48nXnBY"
              class="border-white border-4 shadow-xl rounded-sm"
              @ended="ended"
            />
          </div>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Ingredientes
        </h3>

        <ul class="lista-check mb-0">
          <li>Leite condensado (400g - 1 lata)</li>
          <li>Creme de leite (200g - 1 caixinha)</li>
          <li>Manteiga sem sal (15g - 1 col.sopa rasa)</li>
          <li>Leite em pó integral (35g - 1/3 de xícara)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para finalizar o docinho olho de sogra
        </h3>

        <ul class="lista-check mb-0">
          <li>Açúcar refinado especial (500g)</li>
          <li>Ameixa seca sem semente (200g)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para apresentar os docinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>
            Em uma panela, misture com uma espátula todos os ingredientes. Levar
            ao fogo médio, mexendo sempre.
          </li>

          <li>
            A característica principal de docinho de enrolar quando está pronto
            é que a preparação desprende do fundo da panela.
          </li>

          <li>
            Em seguida, passe para um bowl (não é necessário passar manteiga,
            pois o doce já possui bastante gordura), envolva com filme plástico
            e deixe descansando em temperatura ambiente de um dia para o outro.
            Caso necessário, deixe-os na refrigeração de um dia para o outro.
          </li>

          <li>
            Tire momentos antes de enrolar para que o docinho não fique “duro”,
            molhando levemente a palma da mão com água mineral gelada.
          </li>

          <li>
            O formato pode ser redondo ou da forma que preferir. Pese cada
            docinho com peso de 10g.
          </li>

          <li>
            Corte uma ameixa ao meio e coloque o doce no centro da ameixa.
          </li>

          <li>Boleie novamente e passe no açúcar cristal.</li>

          <li>Ponha os doces prontos na caixeta.</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            Em uma panela, misture, com uma espátula ou fouet o creme de leite
            junto com o pó saborizante.
          </li>

          <li>
            Em seguida, junte e misture os demais ingredientes, leve ao fogo
            médio, mexendo sempre. A característicaprincipal de docinho de
            enrolar,quando está pronto, é que apreparação desprende do fundo e
            das laterais dapanela.
          </li>

          <li>
            Em seguida, passe para umbowl (não é necessário passarmanteiga, pois
            o doce já possuibastante gordura), envolva com filme plástico e
            deixe descansandoem temperatura ambiente de um diapara o outro ou,
            caso necessário,deixe-os na refrigeração por 2 a 3h. Tire momentos
            antesde enrolar, para que o docinho nãofique “duro”.
          </li>

          <li>
            Em seguida, untando sua mão com um pouco de manteiga ou margarina
            sem sal, pese cadadocinho com 15g.
          </li>

          <li>
            Envolva o moranguinho no açúcar refinado, volte a bolear, e deposite
            no tapetinho, depois nas forminhas e em seguida na caixeta.
          </li>
        </ol>
      </div>

      <button
        @click.prevent="$router.push('/aula-03')"
        class="mx-auto bg-primary-color xl:hover:bg-primary-color-hover xl:transform xl:hover:-translate-y-1 xl:transition-all h-12 w-full md:w-60 rounded-lg text-white flex justify-center items-center"
      >
        <v-icon class="icone-setas mr-3" name="arrow-left" />
        Voltar para receitas
      </button>
    </div>
  </div>
</template>

<script>
export default {
  title: "Aula 03 - Receitas: Olho de Sogra",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_6");
    },
  },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.container-icones {
  display: flex;
  gap: 10px;
  justify-content: center;
  max-width: 500px;
  margin: 12px auto;
}

.icone {
  display: flex;
  justify-content: center;
}

.icone span {
  font-size: 1rem;
}

.icone img {
  width: auto;
  height: 17px;
  margin-right: 5px;
}

svg {
  fill: white;
}
</style>
