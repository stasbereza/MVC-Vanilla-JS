export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.fetchItems().then(this.view.init);

    view.on('add', this.addNote.bind(this));
    view.on('remove', this.removeNote.bind(this));
    view.on('edit-start', this.startEditNote.bind(this));
    view.on('edit-cancel', this.cancelEditNote.bind(this));
    view.on('edit-success', this.successEditNote.bind(this));
  }

  addNote(text) {
    this.model.addItem(text).then(this.view.addNote);
  }

  removeNote(id) {
    this.model.removeItem(id).then(this.view.removeNote);
  }

  startEditNote(id) {
    const note = this.model.findItem(id);
    this.model.setSelectedItemId(id);

    this.view.openModal(note);
  }

  cancelEditNote() {
    this.view.closeModal();
  }

  successEditNote(text) {
    const id = this.model.getSelectedItemId();

    this.model.updateItem({ id, text }).then(item  => {
      this.view.closeModal();
      this.view.updateNote(item);
    });
    console.log(id, text);
  }
}
