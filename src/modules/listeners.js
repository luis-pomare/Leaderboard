import storage from './storage.js';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const score = document.getElementById('score');

export default () => {
  refresh.addEventListener('click', () => {
    storage.get();
  });

  submit.addEventListener('click', () => {
    storage.add(name.value, score.value);
    name.value = '';
    score.value = '';
  });
};
