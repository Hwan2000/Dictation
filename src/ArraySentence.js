import React, { useState, useEffect } from "react";

const ArraySentence = ({putSentence, onToggle}) => {

    useEffect(() => console.log(putSentence),[putSentence])

    return(
        <>
            <br/>
            <p>단어수 : {putSentence.length}</p>
            {putSentence.map((putSentence) => (
                <span style={{color: putSentence.correct ? "blue" : "red"}} key = {putSentence.id}>{putSentence.word}<button onClick={() => onToggle(putSentence.id)}>클릭</button></span>
            ))}
        </>
    );
}

export default ArraySentence;