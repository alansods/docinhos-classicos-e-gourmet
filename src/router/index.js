import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula02Introducao from "@/views/aulas/aula-02/Aula02Introducao.vue";
import Aula03Introducao from "@/views/aulas/aula-03/Aula03Introducao.vue";
import Receitas from "@/views/aulas/aula-03/Receitas.vue";
import Beijinho from "@/views/aulas/aula-03/receitas/Beijinho.vue";
import GlaceReal from "@/views/aulas/aula-03/receitas/GlaceReal.vue";
import Casadinho from "@/views/aulas/aula-03/receitas/Casadinho.vue";
import Moranguinho from "@/views/aulas/aula-03/receitas/Moranguinho.vue";
import OlhoDeSogra from "@/views/aulas/aula-03/receitas/OlhoDeSogra.vue";
import BrigadeiroTradicional from "@/views/aulas/aula-03/receitas/BrigadeiroTradicional.vue";
import BrigadeiroDeChurros from "@/views/aulas/aula-03/receitas/BrigadeiroDeChurros.vue";
import BrigadeiroLeiteEmPo from "@/views/aulas/aula-03/receitas/BrigadeiroLeiteEmPo.vue";
import BrigadeiroDrageado from "@/views/aulas/aula-03/receitas/BrigadeiroDrageado.vue";
import BrigadeiroDeMaracuja from "@/views/aulas/aula-03/receitas/BrigadeiroDeMaracuja.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentacao",
    component: Apresentacao,
  },
  {
    path: "/aula-01",
    name: "Aula 01 - Boas práticas na fabricação de alimentos (BPF)",
    component: Aula01Introducao,
  },
  {
    path: "/aula-02",
    name: "Aula 02 - Conhecendo os utensílios",
    component: Aula02Introducao,
  },
  {
    path: "/aula-03",
    name: "Aula 03 - Receitas",
    component: Aula03Introducao,
    children: [
      {
        path: "",
        name: "Aula 03 - Receitas",
        component: Receitas,
      },
      {
        path: "beijinho",
        name: "Aula 03 - Receita: Beijinho",
        component: Beijinho,
      },
      {
        path: "brigadeiro-de-churros",
        name: "Aula 03 - Receita: Brigadeiro de Churros",
        component: BrigadeiroDeChurros,
      },
      {
        path: "limaozinho",
        name: "Aula 03 - Receita: Limãozinho",
        component: GlaceReal,
      },
      {
        path: "casadinho",
        name: "Aula 03 - Receita: Casadinho",
        component: Casadinho,
      },
      {
        path: "moranguinho",
        name: "Aula 03 - Receita: Moranguinho",
        component: Moranguinho,
      },
      {
        path: "olho-de-sogra",
        name: "Aula 03 - Receita: Olho de Sogra",
        component: OlhoDeSogra,
      },
      {
        path: "brigadeiro-tradicional",
        name: "Aula 03 - Receita: Brigadeiro Tradicional",
        component: BrigadeiroTradicional,
      },
      {
        path: "brigadeiro-leite-em-po-com-creme-de-avela",
        name: "Aula 03 - Receita: Brigadeiro de Leite em pó com Creme de Avelã (Gourmet)",
        component: BrigadeiroLeiteEmPo,
      },
      {
        path: "brigadeiro-drageado",
        name: "Aula 03 - Receita: Brigadeiro Drageado",
        component: BrigadeiroDrageado,
      },
      {
        path: "brigadeiro-de-maracuja-com-creme-de-avela",
        name: "Aula 03 - Receita: Brigadeiro de Maracujá com Creme de Avelã (Gourmet)",
        component: BrigadeiroDeMaracuja,
      },
    ],
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

//salvar ultima pagina visitada ao reabrir o site
router.afterEach((to) => {
  localStorage.setItem("router", to.name);
});

let isFirstTransition = true;
router.beforeEach((to, from, next) => {
  const lastRouteName = localStorage.getItem("router");
  const shouldRedirect = Boolean(
    to.name === "Apresentacao" && lastRouteName && isFirstTransition
  );

  if (shouldRedirect && to.name !== from.name) {
    isFirstTransition = false;
    next({ name: lastRouteName });
    console.log("pegou o localstorage");
  } else {
    next();
    console.log("Navegou normal sem reabrir a aba");
  }
});

export default router;
