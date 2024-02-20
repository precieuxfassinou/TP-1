<template>
  <div class="container">
    <h2>Liste de course de Luna :</h2>
    <ul>
      <li v-for="(element, index) in elements" :key="index" class="list-item">
        <button class="edit-button" @click="startEditing(index)">Modifier</button>
        <span v-if="isEditing(index)">
          <input type="text" v-model="editedElements[index]">
          <button @click="saveEdit(index)">Enregistrer</button>
        </span>
        <span v-else>{{ element }}</span>
        <button class="delete-button" @click="deleteElement(index)">Supprimer</button>
      </li>
    </ul>

    <div class="add-container">
      <input type="text" v-model="newElementName" placeholder="Saisir le nom de l'élément">
      <button @click="addElement">Ajouter</button>
    </div>
  </div>
</template>

<style>
.container {
  text-align: left;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.edit-button {
  margin-right: 10px;
}

.delete-button {
  margin-left: 10px;
}

.add-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      elements: ["Bananes", "Pain", "Yaourt nature"],
      editedElements: [],
      newElementName: "",
    };
  },
  methods: {
    addElement() {
      if (this.newElementName) {
        this.elements.push(this.newElementName);
        this.newElementName = "";
      }
    },
    startEditing(index) {
      this.editedElements[index] = this.elements[index];
    },
    saveEdit(index) {
      this.elements[index] = this.editedElements[index];
      this.editedElements[index] = undefined;
    },
    deleteElement(index) {
      this.elements.splice(index, 1);
      this.editedElements.splice(index, 1);
    },
    isEditing(index) {
      return this.editedElements[index] !== undefined;
    },
  },
};
</script>