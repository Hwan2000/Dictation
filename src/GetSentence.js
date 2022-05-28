import React, { useRef, useState } from 'react';
import ArraySentence from "./ArraySentence";

const GetSentence = () => {
  
  const [sentence, setSentence] = useState(
    {
      id:0,
      word:"",
      correct:true,
    }
  );

  const [putSentence, setPutSentence] = useState([]);

  const onChange = (e) => {
    const {name, value} = e.target;
    setSentence({...sentence, [name]:value})
  }

  const nextId = useRef(1);
  const onClick = () => {
    setPutSentence([...putSentence,sentence])
    setSentence({
      id:nextId.current,
      word:"",
      correct:true,
    })
    nextId.current += 1;
  }

  const onKeyPress = (e) => {
    if(e.key === ' ') {
      onClick();
    }
  }

  const onToggle = (id) => {
    const newWord = prompt("수정할 내용",putSentence[id].word);
    setPutSentence(putSentence.map(putSentence => putSentence.id === id ? {...putSentence, word: newWord, correct: !putSentence.correct} : putSentence))
  }

  const eraseBlank = () => {
    setPutSentence(putSentence.filter(putSentence => {
      return putSentence.word !== " ";
    }))
  }

  return (
    <div>
      <input name = "word" onChange={onChange} onKeyUp={onKeyPress} value={sentence.word}></input>
      <ArraySentence putSentence={putSentence} onToggle={onToggle}/>
      <p><button onClick={eraseBlank}>채점!</button></p>
    </div>
  );
}

export default GetSentence;
