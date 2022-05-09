class Scores {
  constructor() {
    this.scores = [];
  }
  add(newName, newScore) {
    class Player {
      constructor(name, score) {
        this.name = name;
        this.score = score;
      }
    }
    const newPlayer = new Player(newName, newScore);
    this.scores.push(newPlayer);
  }
}

const scores = new Scores();

export default scores;
