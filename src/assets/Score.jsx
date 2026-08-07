import {  useState } from 'react'
import Learner from './assets/Learner.jsx'
import './App.jsx';

function Score(score, date) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Date: {date}</p>
    </div>
  );
}