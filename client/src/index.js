import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import './css/styles.css';
import './css/modal.css';
import './css/note-editor.css';

const model = new Model();
const view = new View();

new Controller(model, view);




