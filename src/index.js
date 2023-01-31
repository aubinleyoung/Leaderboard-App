// import _ from 'lodash';
import './style.css';

const listBlock = document.querySelector('.srores-list-container');
const scores = [
  {
    name: 'Aubin',
    score: 85,
  },
  {
    name: 'Mthieux',
    score: 75,
  },
  {
    name: 'Marc',
    score: 65,
  },
  {
    name: 'Luc',
    score: 55,
  },
];
scores.map((e) => {
  listBlock.innerHTML += ` 
  <div class="scores-list">${e.name} : ${e.score}</div>
  `;
  return listBlock;
});