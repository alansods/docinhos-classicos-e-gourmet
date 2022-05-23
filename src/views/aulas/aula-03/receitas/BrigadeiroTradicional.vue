<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[0].nome }}
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
          <li>Leite condensado (400g - 1 lata)</li>
          <li>Chocolate em pó a 50% cacau (30g - 1/3 xícara)</li>
          <li>Manteiga sem sal (15g - 1 col. sopa)</li>
          <li>Creme de leite (200g - 1 caixinha)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para finalizar do brigadeiro
        </h3>

        <ul class="lista-check mb-0">
          <li>Miçangas colorida (500g)</li>
          <li>Tapetinho para doces (100 unid)</li>
          <li>Forminha de papel marrom número 5 (100 unid)</li>
          <li>Caixetas para doces (100 unid)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            Numa panela de fundo grosso de inox (ou outra de sua
            preferência),despeje o creme de leite junto com o chocolate em pó
            peneirado.
          </li>

          <li>Mexa bem. Em seguida, junte o leite condensado e a manteiga.</li>

          <li>
            Mexa bem, com um fouet, antes de levarpara o fogo, até que a
            misturaesteja totalmente uniforme e semgrumos visíveis de chocolate
            em pó.
          </li>

          <li>
            Em seguida, leve paracozinhar em fogo médio, mexendo sempre, com a
            ajuda de uma espátula de silicone que resista a altas temperaturas
            (acima de 250°C), retirando oconteúdo do brigadeiro das laterais da
            panela e do fundo.
          </li>

          <li>
            Repita esse procedimento até queo brigadeiro desprenda do fundoda
            panela.
          </li>

          <li>
            Em seguida, transfira-opara um bowl de plástico atéesfriar por
            completo.
          </li>

          <li>
            Cubra comfilme plástico em contato com obrigadeiro e deixe para
            modelar nodia seguinte. Ou deixe na geladeira(caso a temperatura do
            ambienteseja muito quente).
          </li>

          <li>
            Retire umtempo antes, da geladeira, parapoder enrolar o doce com
            maisfacilidade.
          </li>

          <li>
            Unte as mãos com manteiga sem sal, pese numabalança limpa, cada
            brigadeiro, com peso de10g ou 15g cada.
          </li>

          <li>
            Enrole cada brigadeiro, passe-ospelas miçangas comestíveis
            (granulados ou confeitos) e em seguida volte a boleá-los.
          </li>

          <li>
            Deposite nos tapetinhos, em seguida nas forminhas e por fim nas
            caixetas.
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
  title: "Aula 03 - Receitas: Brigadeiro Tradicional",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_1");
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
