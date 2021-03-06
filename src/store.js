import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bemVindoDeVolta: null,
    menuShow: false,
    temNome: false,
    iconeMenu: "bars",
    modalNome: null,
    modalAulaCompleta: false,
    progresso: Number("0"),
    nomeDoCurso: "Docinhos Clássicos e Gourmet",
    aluno: "",
    btnAlunoInativo: true,
    modalCursoFinalizado: false,
    aulas: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Boas práticas na fabricação de alimentos (BPF)",
        descricaoAula: "Para garantir uma melhor condição do alimento é necessário ter atenção e aplicar as boas práticas de fabricação por meio de cuidados, desde a compra dos insumos até chegar às mãos do consumidor. Não podemos esquecer do manipulador que é uma peça chave para garantir o controle de qualidade.",
        img: "aula-1.jpg",
        link: "/aula-01",
        completa: false,
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Conhecendo os utensílios",
        descricaoAula: "Os utensílios são de extrema importância na hora da produção, pois eles irão auxiliar no processo de fabricação dos doces. Para que seja feita a produção dos doces será necessário o uso de alguns utensílios que iremos apresentar.",
        img: "aula-2.jpg",
        link: "/aula-02",
        completa: false,
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Receituário",
        descricaoAula: "Neste tópico iremos aprender receitas de docinhos tradicionais e gourmet, tais como: brigadeiro tradicional, beijinho, casadinho, brigadeiro de leite em pó com creme de avelã e muitas outras receitas deliciosas que você poderá aplicar de forma fácil e ganhar uma renda extra.",
        img: "aula-3.jpg",
        link: "/aula-03",
        receita_1_completa: false,
        receita_2_completa: false,
        receita_3_completa: false,
        receita_4_completa: false,
        receita_5_completa: false,
        receita_6_completa: false,
        receita_7_completa: false,
        receita_8_completa: false,
        receita_9_completa: false,
        receita_10_completa: false,
      },
    ],
    navbarItems: [
      {
        id: '1',
        nome: 'Apresentação',
        icone: 'home',
        link: '/',
        estaNaAula: false
      },
      {
        id: '2',
        nome: 'Aula 01 - Boas práticas na fabricação de alimentos (BPF)',
        icone: 'book-open',
        link: '/aula-01',
        estaNaAula: false
      },
      {
        id: '3',
        nome: 'Aula 02 - Conhecendo os utensílios',
        icone: 'book-open',
        link: '/aula-02',
        estaNaAula: false
      },
      {
        id: '4',
        nome: 'Aula 03 - Receitas',
        icone: 'book-open',
        link: '/aula-03',
        estaNaAula: false
      },
    ],
    receitas: [
      {
        id: 1,
        nome: "Brigadeiro Tradicional",
        imagem: "brigadeiro-tradicional.jpg",
        tempo: "55min",
        porcoes: "12 porções",
        calorias: "100kcal",
        dificuldade: "fácil",
        path: "/aula-03/brigadeiro-tradicional",
        finalizada: false,
        skeleton: true
      },
      {
        id: 2,
        nome: "Beijinho",
        imagem: "beijinho.jpg",
        tempo: "25min",
        porcoes: "8 porções",
        calorias: "300kcal",
        dificuldade: "fácil",
        path: "/aula-03/beijinho",
        finalizada: false,
        skeleton: true
      },
      {
        id: 3,
        nome: "Limãozinho",
        imagem: "glace-real.jpg",
        tempo: "50min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/limaozinho",
        finalizada: false,
        skeleton: true
      },
      {
        id: 4,
        nome: "Casadinho",
        imagem: "casadinho.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/casadinho",
        finalizada: false,
        skeleton: true
      },
      {
        id: 5,
        nome: "Moranguinho",
        imagem: "moranguinho.jpg",
        tempo: "30min",
        porcoes: "12 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/moranguinho",
        finalizada: false,
        skeleton: true
      },
      {
        id: 6,
        nome: "Olho de sogra",
        imagem: "olho-de-sogra.jpg",
        tempo: "35min",
        porcoes: "16 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/olho-de-sogra",
        finalizada: false,
        skeleton: true
      },
      {
        id: 7,
        nome: "Brigadeiro de Churros (Gourmet)",
        imagem: "brigadeiro-de-churros.jpg",
        tempo: "45min",
        porcoes: "85 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-03/brigadeiro-de-churros",
        finalizada: false,
        skeleton: true
      },
      {
        id: 8,
        nome: "Brigadeiro de Leite em pó com Creme de Avelã (Gourmet)",
        imagem: "brigadeiro-leite-em-po.jpg",
        tempo: "60min",
        porcoes: "20 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-03/brigadeiro-leite-em-po-com-creme-de-avela",
        finalizada: false,
        skeleton: true
      },
      {
        id: 9,
        nome: "Brigadeiro Drageado",
        imagem: "brigadeiro-drageado.jpg",
        tempo: "60min",
        porcoes: "20 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-03/brigadeiro-drageado",
        finalizada: false,
        skeleton: true
      },
      {
        id: 10,
        nome: "Brigadeiro de Maracujá com Creme de Avelã (Gourmet)",
        imagem: "brigadeiro-de-maracuja.jpg",
        tempo: "60min",
        porcoes: "20 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-03/brigadeiro-de-maracuja-com-creme-de-avela",
        finalizada: false,
        skeleton: true
      },
    ]
  },
  mutations: {
    ESTA_NA_AULA_APRESENTACAO(state, payload) {
      state.navbarItems[0].estaNaAula = payload
    },
    ESTA_NA_AULA_1(state, payload) {
      state.navbarItems[1].estaNaAula = payload
    },
    ESTA_NA_AULA_2(state, payload) {
      state.navbarItems[2].estaNaAula = payload
    },
    ESTA_NA_AULA_3(state, payload) {
      state.navbarItems[3].estaNaAula = payload
    },
    modalNomeOposto(state) {
      state.modalNome = true
    },
    iconeMenuOposto(state) {
      state.iconeMenu = "bars"
    },
    menuShowOposto(state) {
      state.menuShow = !state.menuShow
    },
    SALVAR_NOME(state) {
      if(state.aluno.length >= 3 && state.aluno.length <15){
        state.temNome = true
        state.modalNome = false
        localStorage.setItem('store', JSON.stringify(state))
        
      } else{
        return
      }
    },
    SALVAR_LOCAL_STORAGE(state) {
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_AULA_1(state) {
      if (!state.aulas[0].completa) {
        state.progresso = state.progresso + 0
      }
      state.aulas[0].completa = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_AULA_2(state) {
      if (!state.aulas[1].completa) {
        state.progresso = state.progresso + 0
      }
      state.aulas[1].completa = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_1(state) {
      if (!state.aulas[2].receita_1_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_1_completa = true
      state.receitas[0].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_2(state) {
      if (!state.aulas[2].receita_2_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_2_completa = true
      state.receitas[1].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_3(state) {
      if (!state.aulas[2].receita_3_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_3_completa = true
      state.receitas[2].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_4(state) {
      if (!state.aulas[2].receita_4_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_4_completa = true
      state.receitas[3].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_5(state) {
      if (!state.aulas[2].receita_5_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_5_completa = true
      state.receitas[4].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_6(state) {
      if (!state.aulas[2].receita_6_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_6_completa = true
      state.receitas[5].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_7(state) {
      if (!state.aulas[2].receita_7_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_7_completa = true
      state.receitas[6].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_8(state) {
      if (!state.aulas[2].receita_8_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_8_completa = true
      state.receitas[7].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_9(state) {
      if (!state.aulas[2].receita_9_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_9_completa = true
      state.receitas[8].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_10(state) {
      if (!state.aulas[2].receita_10_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_10_completa = true
      state.receitas[9].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    SHOW_MODAL_COMPLETAR_AULA_1(state) {
      state.modalAulaCompleta = true
    },
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
        if (state.aluno.length >= 3) {
          state.bemVindoDeVolta = true;
        } 
        localStorage.setItem('store', JSON.stringify(state))
			} else {
        state.modalNome = true;
        localStorage.setItem('store', JSON.stringify(state))
      }
		}
	},
  actions: {
    abrirModalNome({commit}) {
      commit('modalNomeOposto')
      if(this.state.menuShow){
        commit('iconeMenuOposto')
        commit('menuShowOposto')
      }
    },
    finalizarAula01({commit}) {
      commit('SHOW_MODAL_COMPLETAR_AULA_1')
      //commit('COMPLETAR_AULA_1')
    },
    finalizarAula02({commit}) {
      commit('SHOW_MODAL_COMPLETAR_AULA_1')
      //commit('COMPLETAR_AULA_2')
    },
  },
  getters: {
/*     nomeEscolhido(state) {
      return localStorage.setItem('store', JSON.stringify(state))
    } */
  }
})
