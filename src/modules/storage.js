class Scores {
  constructor() {
    this.scores = [];
  }

  add(name, score) {
    const newPlayer = {};
    newPlayer.name = name;
    newPlayer.score = score;
    this.scores.push(newPlayer);
  }
}

const storage = new Scores();

export default storage;
