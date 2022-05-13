const scoresContainer = document.getElementById('scores-container');

export default (scores) => {
  let format = '';
  scores.result = scores.result.sort((a, b) => b.score - a.score);
  scoresContainer.innerHTML = '';
  for (let i = 0; i < scores.result.length; i += 1) {
    if (i % 2 === 0) {
      format = 'white';
    } else format = '';
    scoresContainer.innerHTML += `
    <div class = ${format}>
      ${scores.result[i].user}: ${scores.result[i].score}
    </div>
    `;
  }
};
