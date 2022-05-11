import storage from './storage';
import update from './updateDom';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const score = document.getElementById('score');

export default function addListeners() {
  refresh.addEventListener('click', () => {
    update();
  });

  submit.addEventListener('click', () => {
    storage.add(name.value, score.value);
    name.value = '';
    score.value = '';
  });
}
