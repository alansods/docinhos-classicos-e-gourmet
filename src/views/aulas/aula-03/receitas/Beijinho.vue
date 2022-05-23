<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[1].nome }}
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
              video-id="CvNYORdHItg"
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
          <li>Leite condensado integral 8% de gordura (400g - 1 lata)</li>
          <li>
            Creme de leite integral de 17% a 25% de gordura (200g - 1 caixinha)
          </li>
          <li>Coco ralado industrial sem açúcar 100g (50g - ½ xícara)</li>
          <li>Manteiga extra sem sal (15g - 1 colher de sopa)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para finalizar os beijinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Coco em flocos ralado sem açúcar (200g)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para apresentar os docinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Caixetas de papel quadradas na cor vermelha (100unid)</li>
          <li>Forminhas de papel na cor marron número 5 (100unid)</li>
          <li>
            Fundo rendado para doces, no tamanho grande transparente com
            florzinhas brancas (100unid)
          </li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            Numa panela, misturar com espátula de silicone todos os
            ingredientes, levar ao fogo médio, mexendo sempre, até soltar do
            fundo e das laterais da panela.
          </li>

          <li>
            Em seguida, passe para um bowl (não é necessário passar manteiga,
            pois o doce já possui bastante gordura), envolva com filme plástico
            e deixe descansando em temperatura ambiente de um dia para o outro,
            ou, caso necessário, deixe-os na refrigeração de 2h a 3h.
          </li>

          <li>
            Se preferir ainda, de um dia para o outro, tire momentos antes de
            enrolar, para que o docinho não fique “duro”.
          </li>

          <li>
            Em seguida, unte levemente as mãos com manteiga ou margarina sem
            sal, pese cada docinho no peso de 15g e envolva nos flocos de coco.
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
  title: "Aula 03 - Receitas: Beijinho",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_2");
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
