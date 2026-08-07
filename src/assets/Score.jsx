import {  useState } from 'react'
import Learner from './assets/Learner.jsx'
import './App.jsx';

function Score({ score }){
    return(
        <div>
            <p>Score: {score.score}</p>
            <p>Date: {score.date}</p>
        </div>
    );
}
export default Score;
