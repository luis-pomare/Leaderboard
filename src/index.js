import './style.css';
import storage from './modules/storage';

storage.add('David', 100);
storage.add('Luis', 300);

console.log(storage.scores[0]);
