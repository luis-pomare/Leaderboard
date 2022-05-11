import storage from './storage';

const scoresContainer = document.getElementById('scores-container');

export default function update() {
  scoresContainer.innerHTML = '';
  for (let i = 0; i < storage.scores.length; i += 1) {
    scoresContainer.innerHTML += `
    <div>
      ${storage.scores[i].name}: ${storage.scores[i].score}
    </div>
    `;
  }
}
