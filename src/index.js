import './style.css';
import addListeners from './modules/listeners.js';
import storage from './modules/storage.js';

addListeners();
storage.get();
