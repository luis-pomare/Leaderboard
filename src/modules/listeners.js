import storage from './storage';
const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const score = document.getElementById('score');

export default function addListeners() {
  refresh.addEventListener('click', () => {
    console.log('refresh');
    //updateDom.update();
  });

  submit.addEventListener('click', () => {
    console.log('submit');
    //storage.add(name, score);
  });
}
