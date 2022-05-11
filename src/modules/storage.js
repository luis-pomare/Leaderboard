class Scores {
  constructor() {
    this.scores = [];
  }

  add(name, score) {
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tnnUMX0ZqphxGBxRdpZI/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score: score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}

const storage = new Scores();

export default storage;
