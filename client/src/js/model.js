import * as api from '../services/api';

export default class Model {
  constructor(items = []) {
    this.items = items;
    this.selectedItemId = null;
  }

  fetchItems() {
    return api.fetchNotes().then(items => {
      this.items = items;

      return this.items;
    });
  }

  setSelectedItemId(id) {
    this.selectedItemId = id;
  }

  getSelectedItemId() {
    return this.selectedItemId;
  }

  findItem(id) {
    return this.items.find(item => item.id === id);
  }

  addItem(text) {
    return api.addNote({ text }).then(item => {
      this.items.push(item);

      return item;
    });
  }

  updateItem(noteToUpdate) {
    return api.updateNote(noteToUpdate).then(updatedItem => {
      let item = this.findItem(updatedItem.id);
      item = Object.assign(item, updatedItem);

      return item;
    });
  }

  removeItem(id) {
    return api.removeNote(id).then(items => {
      this.items = this.items.filter(item => item.id !== id);

      return id;
    });
  }
}
