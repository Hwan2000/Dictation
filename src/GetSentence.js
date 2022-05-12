import React, { useState } from 'react';
import ArraySentence from "./ArraySentence";

const GetSentence = () => {
  
  const [sentence, setSentence] = useState(
    {
      word:"",
      correct:true,
    }
  );

  const [putSentence, setPutSentence] = useState([]);

  const onChange = (e) => {
    const {name, value} = e.target;
    setSentence({...sentence, [name]:value})
  }

  const onClick = () => {
    setPutSentence([...putSentence,sentence])
    setSentence({
      word:"",
      correct:true,
    })
    
  }

  const onKeyPress = (e) => {
    if(e.key === ' ') {
      onClick();
    }
  }

  const onPressEnter =(e) => {
    if(e.key === "Enter") {
      Enter();
    }
  }

  const Enter = () => {
    setSentence({...sentence, word:`n`})
  }

  const onRemove = () => {
    setPutSentence(putSentence.filter(Sentence => Sentence.word !== " "));
  }

  return (
    <div>
      <input name = "word" onChange={onChange} onKeyUp={onKeyPress} value={sentence.word} onKeyDown={onPressEnter}></input>
      <button onClick={onClick}>등록</button>
      <button onClick={Enter}>줄바꿈</button>
      <ArraySentence putSentence={putSentence}/>
    </div>
  );
}

export default GetSentence;
