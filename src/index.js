// import _ from 'lodash';
import './style.css';

const gameId = 'FEM4FXAbEmVFpVXxdPJl';

const refreshScores = async (gameId) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    const scores = await response.json();
  
    const scoresList = document.getElementById('scoresList');
    scoresList.innerHTML = ''; // Clear the previous scores

    scores.forEach((score) => {
      const scoreItem = document.createElement('li');
      scoreItem.innerHTML = `${score.player}: ${score.score}`;
      scoresList.appendChild(scoreItem);
    });
  } catch (error) {
    console.error(error);
  }
};

// Function to submit a score for a game
const submitScore = async (gameId, playerName, score) => {
  try {
    const data = { player: playerName, score };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, options);
    const result = await response.json();
    console.log(result);

    refreshScores(gameId); // Refresh the scores after submitting a new score
  } catch (error) {
    console.error(error);
  }
};

// Refresh button click event handler
document.getElementById('refreshButton').addEventListener('click', () => {
  refreshScores(gameId);
 
});

// Submit button click event handler
document.getElementById('submitButton').addEventListener('click', () => {
  const playerName = document.getElementById('playerName').value;
  const score = document.getElementById('score').value;
  submitScore(gameId, playerName, score);

});
