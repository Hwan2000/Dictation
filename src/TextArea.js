import React, { useState } from "react";

const TextArea =() => {
    const [sentence, setSentence] = useState("");
    const TextOnChange = (e) => {
        setSentence(e.target.value);
    }

    const sentenceArray= sentence.split(' ');

    let WordObject = {};

    const ArraytoObject = (sentence) => {
        let Object = [];
        for(const item of sentence) {
            let putObject = {word:"", correct:true};
            putObject.word = item;
            Object.push(putObject);
        }
        WordObject=Object;
    }

    ArraytoObject(sentenceArray);
    
    const onFix =(e) => {
            WordObject.map(sentence => 
                sentence[e.target.value[0]] === e.target.value[0] ? {...sentence, correct: !sentence.corret} : sentence
            )
    }

    return (
        <div>
            <textarea placeholder="여기에 입력하세요" value={sentence} onChange={TextOnChange}></textarea>
            <div/>
            {WordObject.map((WordObject, index) => {
                return (<span style={{color:WordObject.color ? 'black' : 'green'}}>{WordObject.word + " "}
                <button value = {[index, WordObject.correct]} onClick={onFix}>클릭!</button>
                </span>)
            })}
            {console.log(WordObject)}
            </div>
    )
}

export default TextArea;