// import _ from 'lodash';
import './style.css';

const gameId = 'FEM4FXAbEmVFpVXxdPJl';

const refreshScores = async (gameId) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    const {result} = await response.json();

    const scoresList = document.getElementById('srores-list-container');
    scoresList.innerHTML = ''; // Clear the previous scores
    result.forEach((score) => {
      let scoreItem = document.createElement('div');
      scoreItem.className ="scores-list"
      scoreItem.innerHTML = `${score.user}: ${score.score}`;
      scoresList.appendChild(scoreItem);
    });
  } catch (error) {
    console.error(error);
  }
};

// Function to submit a score for a game
const submitScore = async (gameId, playerName, score) => {
  try {
    const data = { user: playerName, score };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, options);
    const {result} = await response.json();
    console.log(result);

   // Refresh the scores after submitting a new score
  } catch (error) {
    console.error(error);
  }
};

// Refresh button click event handler
document.getElementById('refreshButton').addEventListener('click', () => {
  refreshScores(gameId);
 
});

// Submit button click event handler
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  submitScore(gameId, playerName, score);

});
