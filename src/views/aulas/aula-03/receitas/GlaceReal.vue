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
          Limãozinho - Ingredientes
        </h3>

        <ul class="lista-check mb-0">
          <li>Leite condensado integral 8% de gordura (400g - 1 lata)</li>
          <li>
            Creme de leite integral de 17% a 25% de gordura (200g - 1 caixinha)
          </li>
          <li>Raspas e suco de limão (2 a 3 unid - 2 a 3 unid)</li>
          <li>Manteiga extra sem sal (15g - 1 col. sopa)</li>
          <li>Corante em gel verde (A gosto)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Limãozinho - Para finalizar os limãozinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Açúcar refinado especial (250g)</li>
          <li>Corante em gel verde (Q.B)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Limãozinho - Para apresentar os docinhos
        </h3>

        <ul class="lista-check mb-0">
          <li>Caixetas de papel quadradas na cor verde (50 unid)</li>
          <li>Forminhas de papel na cor marron número 5 (50 unid)</li>
          <li>
            Fundo rendado para doces, no tamanho grande transparente com
            florzinhas brancas (50 unid)
          </li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Limãozinho - Método de preparo
        </h3>

        <ol class="lista-numerica">
          <li>Primeiramente, lave e seque os limões.</li>

          <li>
            Em seguida, com o ralador fino, rale somente a casca verde do limão,
            esprema o suco de limão e leve ou ao micro-ondas, mexendo sempre,
            após cada 30 segundos, até reduzir a uma pasta viscosa. Se preferir,
            leve numa panela pequena ao fogo, mexendo sempre até reduzir.
            Reserve.
          </li>

          <li>
            Em uma panela, misture, com uma espátula ou fouet, todos os
            ingredientes.
          </li>

          <li>
            Mexa bem e leve ao fogo médio para alto, mexendo sempre, para que o
            doce não queime na lateral e nem no fundo.
          </li>

          <li>
            A característicaprincipal de docinho de enrolar,quando está pronto,
            é que apreparação desprende do fundo dapanela.
          </li>

          <li>
            Em seguida, passe para umbowl (não é necessário passar manteiga,
            pois o doce já possui bastante gordura), envolva com filme plástico
            e deixe descansando em temperatura ambiente de um dia para o outro.
            Ou, se preferir,deixe-os na refrigeração de um dia para o outro.
            Tire momentos antesde enrolar, para que o docinho nãofique “duro”.
          </li>

          <li>
            Depois de totalmente frio, incorpore, com a ajuda de uma colher, as
            raspas de limão, a “geleia” reduzida do limão e o corante em gel
            verde.
          </li>

          <li>
            Faça movimentos regulares e uniformes, para que o sabor se espalhe
            por toda a massa.
          </li>

          <li>
            Prove para se certificar-se se precisa de mais sabor de limão. Tenha
            cuidado para não o deixar muito azedo. Lembre-se! O sabor se
            intensifica com o passar dos dias.
          </li>

          <li>Em seguida, numa assadeira, coloque o açúcar refinado.</li>

          <li>
            Faça bolinhas com o peso de 15g, unte a mão com manteiga, passe pelo
            açúcar, volte a bolear, coloque o cravinho bem no meio do docinho e
            finalize com uma folha feita de glacê real.
          </li>

          <li>
            Coloque no tapetinho em seguida, na forminha de brigadeiro e, por
            fim, nas caixetas.
          </li>
        </ol>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Glacê Real - Ingredientes
        </h3>

        <ul class="lista-check mb-0">
          <li>Açúcar de confeiteiro (240g - 2 xícaras)</li>
          <li>Claras (60g - 2 unid.)</li>
          <li>Suco de limão (2g - A gosto)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Glacê Real - Para tingir
        </h3>

        <ul class="lista-check mb-0">
          <li>Corante em gel verde folha (Q.b.)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Glacê Real - Para aplicar o glacê
        </h3>

        <ul class="lista-check mb-0">
          <li>Saco de confeitar grande (1 unid)</li>
          <li>Bico folha pequeno (1 unid)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Glacê Real - Método de preparo
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
  title: "Aula 03 - Receitas: Limãozinho",
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
