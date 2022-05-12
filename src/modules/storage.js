import update from './updateDom.js';

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
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then((response) => response.json());
    this.running = false;
  }

  get = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tnnUMX0ZqphxGBxRdpZI/scores/',
    );
    this.scores = await response.json();
    update(this.scores);
  };
}

const storage = new Scores();

export default storage;
