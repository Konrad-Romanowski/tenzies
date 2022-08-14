import React from 'react';
import './Die.css';
import diceTemplates from './diceTemplates';

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#53d455" : "#ffffff"
    }

    const diceTemplate = diceTemplates[props.value];

    const pipsElement = diceTemplate.map((isPip,index) => 
        <div key={index} className={isPip ? "pip filled" : "pip"}></div>
    )

    return (
        <div
            className="die"
            style={styles}
            onClick={props.handleClick}
        >
            {pipsElement}
        </div>
    )
}