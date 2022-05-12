const scoresContainer = document.getElementById('scores-container');

export default function update(scores) {
  scores.result = scores.result.sort((a, b) => b.score - a.score);
  scoresContainer.innerHTML = '';
  for (let i = 0; i < scores.result.length; i += 1) {
    scoresContainer.innerHTML += `
    <div>
      ${scores.result[i].user}: ${scores.result[i].score}
    </div>
    `;
  }
}
