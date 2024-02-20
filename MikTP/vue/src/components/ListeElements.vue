<template>
    <div>
      <ul>
        <li v-for="element in elements" :key="element.id">
          {{ element.nom }} <button @click="supprimerElement(element.id)">Supprimer</button>
        </li>
      </ul>
      <button @click="ajouterElement">Ajouter un élément</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListeElements',
    data() {
      return {
        elements: [{ id: 1, nom: 'Element 1' }, { id: 2, nom: 'Element 2' }]
      };
    },
    methods: {
      ajouterElement() {
        const nouvelElement = { id: this.elements.length + 1, nom: `Element ${this.elements.length + 1}` };
        this.elements.push(nouvelElement);
      },
      supprimerElement(id) {
        this.elements = this.elements.filter(element => element.id !== id);
      },
    }
  }
  </script>  