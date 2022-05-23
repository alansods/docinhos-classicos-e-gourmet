<template>
  <div id="aula-01">
    <ModalAula01Completa
      :numeroAula="$store.state.aulas[0].numeroAula"
      :nomeAula="$store.state.aulas[0].nomeAula"
      :linkContinuar="$store.state.aulas[1].link"
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
              Aula {{ $store.state.aulas[0].numeroAula }}
            </h2>
          </div>
          <h3 class="text-3xl xl:text-4xl font-bold shadow-sm">
            {{ $store.state.aulas[0].nomeAula }}
          </h3>
          <hr style="opacity: 40%; margin: 15px 0" />
          <p class="mt-2 font-light" style="width 80%">
            {{ $store.state.aulas[0].descricaoAula }}
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
          Seguir as boas práticas de fabricação de alimentos é garantir uma
          correta higiene dos alimentos, do manipulador e do ambiente de
          trabalho. Dessa forma, a saúde de quem irá consumir é garantida e as
          determinações dos órgãos de saúde competentes, seguidas. Não importa
          se o alimento será produzido em casa, em um pequeno negócio, ou em uma
          indústria. As boas práticas devem ser aplicadas sempre! Abaixo, seguem
          algumas orientações sobre essas regras para o setor de manipulação de
          alimentos. Confira!
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.1. Ambiente de manipulação
        </h3>

        <p>
          De acordo com a RDC 216, que fala sobre a legislação de boas práticas
          pra serviços de alimentação o local deve possuir piso e paredes de
          fácil e eficiente higienização, teto conservado, janelas e aberturas
          teladas, para evitar a entrada de insetos e outros animais. Os insumos
          para a produção de alimentos e produtos de limpeza não podem ser
          armazenados no mesmo local. O descarte do lixo deve ser realizado
          periodicamente e com segurança, ou seja, o lixo não pode ficar perto
          de alimentos prontos para consumo.
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.2. Manipulador de alimentos
        </h3>

        <p>
          Toda pessoa que lave, corte, rale, cozinhe e/ou prepare bebidas é
          considerada um manipulador de alimentos e estes, por sua vez, também
          devem seguir as especificações determinadas pela ANVISA, conforme
          abaixo:
        </p>

        <ul class="lista-check">
          <li>Limpeza e higiene pessoal;</li>
          <li>Cabelos protegidos;</li>
          <li>Roupa adequada;</li>
          <li>Unhas cortadas e limpas;</li>
          <li>Sem acessórios e/ou maquiagem;</li>
          <li>Lavar sempre as mãos;</li>
          <li>Não tossir ou espirrar próximo aos alimentos.</li>
        </ul>
      </div>

      <div class="p-8 rounded-lg shadow my-5 text-white bg-red-500">
        <div class="flex items-center font-semibold text-2xl text-white mb-5">
          <v-icon name="exclamation" class="mr-2 fill-current" scale="1.8" />
          <h3>Importante</h3>
        </div>
        <div>
          <p>
            Todos que visitarem a área de manipulação de alimentos devem seguir
            as recomendações de boas práticas.
          </p>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.3.  <em>Mise en place</em>
        </h3>

        <p>
          Na rotina de cozinheiros (as), padeiros (as), confeiteiros (as),
          salgadeiras (os) e todos que trabalham na produção de alimentos,
          separar utensílios, pesar insumos, cortar frutas, legumes e/ou carnes,
          enfim, deixar tudo pronto para o início de uma preparação é comum.
          Essas atitudes caracterizam o tão conhecido  <em>Mise en place</em> (pronunciar
          “mizãn plass”).
        </p>

        <p>
          Fazer o mise in place para uma preparação, evita problemas, organiza o
          espaço, economiza tempo, não desperdiça insumos e torna o processo
          ágil.
        </p>

        <p>
          Abaixo tem um passo a passo que irá lhe auxiliar para um  <em>Mise en place</em>
          bem feito.
        </p>

        <ul class="lista-check">
          <li>
            Leia toda a receita, observando os detalhes, como tempo de
            refrigeração, congelamento e/ou preaquecimento do forno;
          </li>

          <li>
            Verifique se possui todos os ingredientes, utensílios e equipamentos necessários e, organize, todos devem estar limpos;
          </li>

          <li>
            Pese os ingredientes em bowls individuais;
          </li>

          <li>
            Descasque, pique, rale, esprema o que for pedido na receita;
          </li>

          <li>
            Por fim, organize todo o material na bancada de acordo com a ordem de utilização.
          </li>
        </ul>
        
        <p>
          Mão na massa!
        </p>
      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <div @click="$store.dispatch('finalizarAula01')">
          <NavButton :icone="'arrow-right'"></NavButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 01 - Boas práticas na fabricação de alimentos (BPF)",
  components: {
    NavButton,
  },
  created() {
    this.$store.commit("COMPLETAR_AULA_1");
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", true);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", false);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
    this.$store.state.modalAulaCompleta = false;
  },
};
</script>

<style></style>
