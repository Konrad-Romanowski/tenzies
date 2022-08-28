import React from 'react';
import './Die.css';
import diceTemplates from './diceTemplates';

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#53d455" : "#ffffff"
    }
    
    let pipsElement = [];

    if(!props.displayDiceAsDigits) {
        const diceTemplate = diceTemplates[props.value]; 
        pipsElement = diceTemplate.map((isPip,index) => 
            <div key={index} className={isPip ? "pip filled" : "pip"}></div>
        )
    }

    return (
        <div
            className={`die ${props.displayDiceAsDigits ? "die-digits" : "die-pips"}`}
            style={styles}
            onClick={props.handleClick}
        >
            {
                props.displayDiceAsDigits ? 
                props.value :
                pipsElement
            }
        </div>
    )
}