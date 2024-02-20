<!-- <template>
  <div>
    <ul>
      <li v-for="element in elements" :key="element.id">
        {{ element.nom }}
      </li>
    </ul>
  </div>
</template>-->

<template>
    <div>
      <ul>
        <li v-for="element in elements" :key="element.id">
          {{ element.nom }} <button @click="supprimerElement(element.id)">Supprimer</button>
        </li>
      </ul>
    </div>
</template>



<script>
export default {
  name: 'ListeElements',
  data() {
    return {
      elements: [{ id: 1, nom: 'Element 1' }, { id: 2, nom: 'Element 2' }]
    }
  },
  methods: {
    ajouterElement() {
      const nouvelElement = { id: this.elements.length + 1, nom: 'Nouvel Element' };
      this.elements.push(nouvelElement);
    },
    supprimerElement(id) {
      this.elements = this.elements.filter(element => element.id !== id);
    },
    // Ajoutez ici les méthodes pour lire et mettre à jour si nécessaire
  }
}
</script>