import { createStore } from 'vuex';

export default createStore({
    state: {
      elements: [{ id: 1, nom: 'Element 1' }, { id: 2, nom: 'Element 2' }]
    },
    mutations: {
      AJOUTER_ELEMENT(state, element) {
        state.elements.push(element);
      },
      SUPPRIMER_ELEMENT(state, id) {
        state.elements = state.elements.filter(element => element.id !== id);
      }
      // Ajoutez des mutations pour lire et mettre à jour si nécessaire
    },
    actions: {
      ajouterElement({ commit }) {
        const element = { id: Date.now(), nom: 'Nouvel Element' };
        commit('AJOUTER_ELEMENT', element);
      },
      supprimerElement({ commit }, id) {
        commit('SUPPRIMER_ELEMENT', id);
      }
      // Ajoutez des actions correspondantes
    },
    getters: {
      elements: state => state.elements
    }
  });