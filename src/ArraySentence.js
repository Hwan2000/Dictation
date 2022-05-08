import React from "react";

const Print = ({putSentence}) => {
    return (
        <>
            <span>{putSentence.word}</span>
        </>
    )
}

const ArraySentence = ({putSentence}) => {

    

    return(
        <>
            <br/>
            {putSentence.map((putSentence, index) => (
                <Print putSentence={putSentence} key={index}/>
            ))}
        </>
    );
}

export default ArraySentence;