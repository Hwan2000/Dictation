import React, { useState, useEffect } from "react";

const ArraySentence = ({putSentence, onToggle}) => {

    useEffect(() => console.log(putSentence),[putSentence])

    return(
        <>
            <br/>
            <p>단어수 : {putSentence.length-1}</p>
            {putSentence.map((putSentence) => (
                <span onClick = {() => onToggle(putSentence.id)}style={{color: putSentence.correct ? "blue" : "red"}} key = {putSentence.id}>{putSentence.word}</span>
            ))}
        </>
    );
}

export default ArraySentence;