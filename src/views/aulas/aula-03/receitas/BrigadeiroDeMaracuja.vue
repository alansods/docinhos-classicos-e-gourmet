<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[9].nome }}
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
              video-id="JMeggCF8Iyo"
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
          <li>Manteiga sem sal (15g - 1 col.sopa rasa)</li>
          <li>Suco de maracujá concentrado (100g - ½ xicara cheia)</li>
          <li>
            Chocolate em barra branco (100g - 1 tablete de 1 barra de 1kg)
          </li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para finalizar os brigadeiros
        </h3>

        <ul class="lista-check mb-0">
          <li>Açúcar refinado especial (250g)</li>
          <li>Corante em gel amarelo (Algumas gotinhas)</li>
          <li>Creme de avelã (Quanto Baste - 200g)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para apresentar os docinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Caixetas de papel quadradas na cor amarelo (100 unid)</li>
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
            EPrimeiramente pegue o suco de maracujá concentrado e leve numa
            panela para o fogo, mexendo sempre até que o suco fique
            completamente reduzido. Sua aparência fica igual a uma geleia. Deixe
            esfriar por completo. Reserve.
          </li>

          <li>
            Numa panela, misture com uma espátula ou fouet todos os
            ingredientes.
          </li>

          <li>
            Mexa bem, leve ao fogo médio para alto, mexendo sempre para que o
            doce não queime na lateral e nem no fundo. A característica
            principal de docinho de enrolar, quando está pronto, é que a
            preparação desprende do fundo da panela.
          </li>

          <li>
            Continue a mexer até que se perceba que a massa do doce está bem
            cremosa e totalmente densa, soltando com bastante facilidade do
            fundo da panela.
          </li>

          <li>
            Desligue o fogo e acrescente a redução do maracujá e as gotinhas de
            corante em gel.
          </li>

          <li>
            Passe para um bowl (não é necessário passar manteiga, pois o doce já
            possui bastante gordura). Envolva com filme plástico e deixe
            descansando em temperatura ambiente de um dia para o outro, ou caso
            necessário, deixe-os na refrigeração de um dia para o outro. Tire
            momentos antes de enrolar, para que o docinho não fique “duro”.
          </li>

          <li>
            Passe manteiga ou margarina sem sal nas mãos, faça pequenas bolinhas
            de 12 a 15g.
          </li>

          <li>Envolva no açúcar refinado, volte a bolear novamente.</li>

          <li>
            Coloque nos tapetinhos, em seguida, nas forminhas e depois nas
            caixetas.
          </li>

          <li>
            Finalize fazendo um furo no centro do docinho com uma esteca
            pontiaguda.
          </li>

          <li>
            Comece a colocar o creme de avelã, que deverá estar numa manga/saco
            de confeitar com um bico pitanga fino (numeração de sua
            preferência).
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
  title:
    "Aula 03 - Receitas: Brigadeiro de Maracujá com Creme de Avelã (Gourmet)",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_10");
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
