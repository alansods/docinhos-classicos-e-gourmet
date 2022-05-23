<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[8].nome }}
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
              video-id="hcUUTQ7oU2U"
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
          <li>
            Chocolate nobre em barra meio amargo (100g - 1 tablete de uma barra
            de 1kg)
          </li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para finalizar os brigadeiros
        </h3>

        <ul class="lista-check mb-0">
          <li>Chocolates drageados pequenos (500g)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para apresentar os docinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Caixetas de papel quadradas na cor transparente (100 unid)</li>
          <li>Forminhas de papel na cor marron número 5 (100 unid)</li>

          <li>
            Fundo rendado para doces, no tamanho pequeno transparente com
            florzinhas brancas (100 unid)
          </li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            Em uma panela, misturar com uma espátula todos os ingredientes ainda
            com o fogo desligado.
          </li>

          <li>
            Em seguida, leve ao fogo médio, mexendo sempre. A característica
            principal de docinho de enrolar quando está pronto é que a
            preparação desprende do fundo da panela.
          </li>

          <li>
            Continue a mexer até que se perceba que a massa do doce está bem
            cremosa e totalmente densa, soltando com bastante facilidade do
            fundo da panela.
          </li>

          <li>
            Passe para um bowl (não é necessário passar manteiga, pois o doce já
            possui bastante gordura), envolva com filme plástico e deixe
            descansando em temperatura ambiente de um dia para o outro ou, caso
            necessário, deixe-os na refrigeração de 2h a 3 h.
          </li>

          <li>
            Tire momentos antes de enrolar para que o docinho não fique “duro”.
          </li>

          <li>
            Passe manteiga sem sal nas mãos, faça bolinhas pequenas com tamanhos
            regulares em média de 12g a 15g.
          </li>

          <li>
            Coloque as drágeas num prato grande, depois passe cada brigadeiro
            por esse drageado.
          </li>

          <li>
            Faça uma leve pressão no brigadeiro para que todas as drágeas fiquem
            coladas no brigadeiro.
          </li>

          <li>
            Volte a bolear, deposite eles prontos em cima do tapetinho, depois
            nas forminhas e por fim nas caixetas.
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
  title: "Aula 03 - Receitas: Brigadeiro Drageado",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_9");
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
