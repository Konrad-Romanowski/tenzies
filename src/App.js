import React from 'react';
import { nanoid } from 'nanoid'
import Die from './components/Die.js';
import './App.css';
import Confetti from 'react-confetti';

export default function App() {

    function allNewDice() {
        const numberOfDice = 10;
        const newArray = [];

        for(let i=0; i < numberOfDice; i++) {
            newArray[i] = {
                value: Math.floor(Math.random()*6+1),
                isHeld: false,
                id: nanoid()
            }
        }
        return newArray
    }

    function rollDice() {
        if(gameStatus.win) {
            setDice(allNewDice());
            setGameStatus({win: false, numOfRolls: 0})
        } else {
            setDice(prevDice => prevDice.map(die => {
                return die.isHeld ? 
                    die :
                    {...die, value: Math.floor(Math.random()*6+1)}
            }));
            setGameStatus(prevGameStatus => {
                return {
                    ...prevGameStatus,
                    numOfRolls: prevGameStatus.numOfRolls + 1
                }
            })
        }
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die =>{
            return die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die;
        }))
    }

    const [dice, setDice] = React.useState(allNewDice());

    const [gameStatus, setGameStatus] = React.useState({
        win: false,
        numOfRolls: 0
    })

    React.useEffect(()=>{
        let areSame = false;
        let areHeld = false;
        const firstDieValue = dice[0].value;

        if(dice.every(die=>die.value === firstDieValue)) areSame = true;
        if(dice.every(die=>die.isHeld)) areHeld = true;

        if(areSame && areHeld) setGameStatus(prevGameStatus => {
            return {
                ...prevGameStatus,
                win: true
            }
        })

    },[dice])

    let diceElements = dice.map(die => 
            <Die
                key={die.id}
                value={die.value}
                isHeld={die.isHeld}
                handleClick={!gameStatus.win && (() => holdDice(die.id))}
            />
        )

    return (
        <main className="game-container">
            {gameStatus.win && <Confetti />}
            <h1>Tenzies</h1>
            <p className="game-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="score-container">Rolls: {gameStatus.numOfRolls}</div>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice}>{gameStatus.win ? "New game" : "Roll"}</button>
        </main>
    )
}