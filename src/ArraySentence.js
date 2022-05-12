import React, { useState, useEffect } from "react";

const Print = ({putSentence}) => {

    return (
        <>
            <span style={{color:putSentence.color ? 'red' : 'green'}}>{putSentence.word}</span>
        </>
    )
}

const ArraySentence = ({putSentence}) => {

    useEffect(() => console.log(putSentence),[putSentence])

    return(
        <>
            <br/>
            <p>단어수 : {putSentence.length}</p>
            {putSentence.map((putSentence, index) => (
                <Print putSentence={putSentence} key={index}/>
            ))}
        </>
    );
}

export default ArraySentence;