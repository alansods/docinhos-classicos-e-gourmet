<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[7].nome }}
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
              video-id="etcX8pIGynU"
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
          <li>Leite em pó integral (80g - 1 xícara de chá)</li>
          <li>Manteiga extra sem sal (15g - 1 col.sopa rasa)</li>
          <li>Chocolate branco em barra (90g - 1 quadradinho de uma barra de 1kg)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para finalizar os brigadeiros
        </h3>

        <ul class="lista-check mb-0">
          <li>Leite em pó integral (Quanto Baste - 200g)</li>
          <li>Creme de avelã (Quanto Baste - 200g)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para apresentar os docinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Caixetas de papel quadradas na cor marrom (50 unid)</li>
          <li>Forminhas de papel na cor marron número 5 (50 unid)</li>

          <li>
            Fundo rendado para doces, no tamanho pequeno transparente com
            florzinhas brancas (50 unid)
          </li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            Em uma panela, misture com uma espátula ou fouet o creme de leite junto com o leite em pó. Deixe bem uniforme. 
          </li>

          <li>
            Em seguida, junte os demais ingredientes, leve ao fogo alto, mexendo sempre. A característica principal de docinho de enrolar quando está pronto, é que a preparação desprende do fundo e das laterais da panela. Continue a mexer, até que se perceba que a massa do doce está bem cremosa e totalmente densa, soltando com bastante facilidade do fundo da panela. 
          </li>

          <li>
            Em seguida, passe para um bowl (não é necessário passar  manteiga, pois o doce já possui  bastante gordura), envolva com  filme plástico e deixe descansando  em temperatura ambiente de um dia  para o outro. Se preferir, deixe-os na refrigeração por 2h a 3h ou de um dia para o outro. Tire momentos antes de enrolar, para que o docinho não fique “duro”. 
          </li>

          <li>
            Em seguida, untando sua mão com um pouco de manteiga ou margarina sem sal, pese cada docinho com 15g. Envolva o brigadeiro no leite em pó.
          </li>

          <li>
            Em seguida retire o excesso, e volte a bolear novamente, coloque os docinhos nos tapetinhos, em seguida nas forminhas e depois nas caixetas.
          </li>

          <li>
            Finalize fazendo um furo no centro do docinho com uma esteca pontiaguda.
          </li>

          <li>
            Comece a colocar o creme de avelã, que deverá estar numa manga/saco de confeitar com um bico pitanga fino (numeração de sua preferência). 
          </li>

          <li>
            Finalize fazendo como se fosse fazer uma mine roseta. 
          </li>

          <li>
            Pinge no centro e vá circulando, fazendo o formato de uma roseta. 
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
  title: "Aula 03 - Receitas: Brigadeiro de Leite em pó com Creme de Avelã (Gourmet)",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_8");
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
