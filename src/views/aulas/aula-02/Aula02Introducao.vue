<template>
  <div id="aula-01">
    <ModalAula01Completa
      :numeroAula="$store.state.aulas[1].numeroAula"
      :nomeAula="$store.state.aulas[1].nomeAula"
      :linkContinuar="$store.state.aulas[2].link"
    />

    <div
      id="container-bg-video"
      class="img-bg-aula bg-cover h-1/4 px-5 pb-10 md:py-8 xl:px-0 mx-auto text-white"
    >
      <div
        id="container-all-content-bg-video"
        class="w-full xl:max-w-screen-lg mx-auto flex flex-col xl:flex-row xl:items-center pt-12 xl:pt-7 xl:pb-5"
      >
        <div id="titulo-curso" class="xl:w-3/4 text-left">
          <div class="flex items-center">
            <v-icon
              name="book-open"
              class="mr-2 text-xl xl:text-xl fill-current"
            />
            <h2 class="text-xl xl:text-xl font-light shadow-sm">
              Aula {{ $store.state.aulas[1].numeroAula }}
            </h2>
          </div>
          <h3 class="text-3xl xl:text-4xl font-bold shadow-sm">
            {{ $store.state.aulas[1].nomeAula }}
          </h3>
          <hr style="opacity: 40%; margin: 15px 0" />
          <p class="mt-2 font-light" style="width 80%">
            {{ $store.state.aulas[1].descricaoAula }}
          </p>
        </div>

        <!-- <div
          id="container-video-apresentacao"
          class="w-full md:w-2/4 2xl:w-2/5 mx-auto my-12 xl:my-4"
        >
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <iframe
              class="border-white border-4 shadow-xl rounded-sm"
              src="https://www.youtube.com/embed/93wkCvje2ro"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> -->
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p>
          Os utensílios são de extrema importância na hora da produção, pois
          eles irão auxiliar no processo de fabricação dos docinhos. Para que
          seja feita a produção dos docinhos será necessário o uso de alguns
          utensílios que estão listados abaixo.
        </p>
      </div>

      <div class="grid flex-col md:flex-row">
        <div class="item shadow">
          <img src="@/assets/img/placa-de-corte.jpg" />
          <div class="item__overlay">
            <h3 id="person1" aria-hidden="true">Placa de corte</h3>
            <div class="item__body">
              <p>
                Utilizadas para apoiar os alimentos durante a manipulação,
                especialmente quando há necessidade de cortar os alimentos.
              </p>
            </div>
          </div>
        </div>
        <div class="item shadow">
          <img src="@/assets/img/espatula-de-silicone-pao-duro.jpg" />
          <div class="item__overlay">
            <h3 id="person2" aria-hidden="true">Espátula de silicone</h3>
            <div class="item__body">
              <p>
                Mexer preparações e evitar o desperdício, por isso também
                conhecida como “pão duro”.
              </p>
            </div>
          </div>
        </div>
        <div class="item shadow">
          <img src="@/assets/img/peneira.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Peneira</h3>
            <div class="item__body">
              <p>
                Separar elementos de consistência sólida da parte líquida ou
                homogeneizar ingredientes, separando e removendo partículas,
                resíduos ou pedaços maiores contidos na porção peneirada.
              </p>
            </div>
          </div>
        </div>
        <div class="item shadow">
          <img src="@/assets/img/batedeira-planetaria.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Batedeira planetária</h3>
            <div class="item__body">
              <p>
                Utilizada para funções mais profissionais como o preparo de
                massas mais pesadas e espessas. Possui três acessórios
                diferentes: globo ou fouet (utilizado para bater massas leves
                que não necessitam de muita força como claras em neve, glacês,
                chantilly, maionese, massas de bolo e merengues); leque ou
                raquete (utilizado para bater massas de consistência média, com
                ingredientes de maior densidade e que levam receitas à base de
                manteiga e açúcar como biscoitos amanteigados, cookies, pães sem
                sova, bolos mais pesados, purês, entre outros); gancho
                (utilizado para bater massas mais pesadas e que precisam de
                sova, como pães, massas de panetones e chocotones, brioche,
                macarrão, pizzas, entre outros).
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <img src="@/assets/img/panelas.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Panela</h3>
            <div class="item__body">
              <p>Utilizada para o preparo dos docinhos.</p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <img src="@/assets/img/balanca.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Balança</h3>
            <div class="item__body">
              <p>
                Medir a massa dos insumos e do produto finalizado a fim de
                garantir o preparo correto e padronização das receitas e dos
                doces prontos.
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <img src="@/assets/img/bowls-vasilha.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Bowl</h3>
            <div class="item__body">
              <p>
                Marinar alimentos, armazenar sobras de comida, misturar
                ingredientes durante o preparo de uma receita ou mesmo servir
                uma refeição.
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <img src="@/assets/img/colher-de-polietileno.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Colher de polietinelo</h3>
            <div class="item__body">
              <p>Utilizado para mexer os alimentos.</p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <img src="@/assets/img/pincel-de-silicone.jpg" />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Pincel de silicone</h3>
            <div class="item__body">
              <p>Espalhar manteiga, azeite ou óleo de uma forma rápida, econômica e uniforme o que reduz a gordura dos pratos.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/aula-01">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <div @click="$store.dispatch('finalizarAula02')">
          <NavButton :icone="'arrow-right'"></NavButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 02 - Conhecendo os utensílios",
  components: { NavButton },
  created() {
    this.$store.commit("COMPLETAR_AULA_2");
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", true);
    this.$store.commit("ESTA_NA_AULA_3", false);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
    this.$store.state.modalAulaCompleta = false;
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.item {
  position: relative;
  height: 16rem;
  flex-basis: 330px;
  background-color: #fff;
  overflow-y: hidden;
  border-radius: 8px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .item {
    width: 100%;
  }
}

.item h3 {
  margin: 0;
  display: block;
  background-color: #eee;
  color: #444;
  padding: 1rem 1.5rem;
  font-weight: 500;
  text-align: center;
}

.item a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.item:hover .item__overlay {
  transform: translate3d(0, 0, 0);
}

.item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.item__overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 300ms ease-in-out;
  background-color: #fff;
  transform: translate3d(0, calc(100% - 3.5rem), 0);
}

.item__body {
  flex-grow: 1;
  padding: 1rem 1.5rem;
  overflow-y: auto;
}
.item__body p {
  margin: 0;
}
</style>
