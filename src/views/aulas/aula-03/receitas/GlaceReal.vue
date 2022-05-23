<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        {{ $store.state.receitas[2].nome }}
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
              video-id="8RaOEJi0YxE"
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
          <li>Açúcar de confeiteiro (240g - 2 xícaras)</li>
          <li>Claras (60g - 2 unid.)</li>
          <li>Suco de limão (2g - A gosto)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para tingir
        </h3>

        <ul class="lista-check mb-0">
          <li>Corante em gel verde folha (Q.b.)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Para aplicar o glacê
        </h3>

        <ul class="lista-check mb-0">
          <li>Saco de confeitar grande (1 unid)</li>
          <li>Bico folha pequeno (1 unid)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>Na batedeira, coloque a clara dentro dobowl.</li>

          <li>
            Bata por um minuto, acrescente em seguida o açúcar impalpável e mexa
            bem para incorporar.
          </li>

          <li>
            Batacom o batedor globo até que o glacêfique montado, ou seja, com
            atextura firme e cor menos brilhante.
          </li>

          <li>
            Junte o suco de limão e deixe no ponto firme, sem que caia do bowl
            da bateira.
          </li>

          <li>
            Deve-se, em média, bater por uns 5minutos. Antes de terminar
            oprocesso, acrescente a quantidadede corante suficiente na
            cordesejada.
          </li>

          <li>
            Em seguida, passe para a manga(saco de confeitar), com o bico folha,
            e faça a aplicação. Mantenha orestante do glacê sempre coberto, de
            preferência com um pano de limpezalevemente úmido.
          </li>

          <li>
            Isso evita que o glacê resseque com facilidade.Entretanto, depois de
            feito o glacê, sua aplicação deverá ser imediata.
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
  title: "Aula 03 - Receitas: Glacê Real",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_3");
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
