import { useState } from 'react'
import './App.jsx';

function Learner(name, bio, scores) {
    const [learnerName] = useState(name);
    const [learnerBio] = useState(bio);
    const [learnerScores] = useState(scores);
    

}