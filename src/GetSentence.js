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

  const [putSentence, setPutSentence] = useState([
    {
      id:-1,
      word:"->",
      correct:true,
    }
  ]);

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
    let newWord = prompt("수정할 내용");
    let changeNumber = (putSentence[id+1].word).lastIndexOf('[');
    if(changeNumber === -1) {changeNumber = (putSentence[id+1].word).length}
    newWord === '' ? newWord = (putSentence[id+1].word).substr(0,changeNumber) + ' ' : newWord = (putSentence[id+1].word).slice(0,-1) + '[' + newWord + ']' + ' ';
    setPutSentence(putSentence.map(putSentence => putSentence.id === id ? {...putSentence, word: newWord, correct: !putSentence.correct} : putSentence))
  }

  const eraseBlank = () => {
    setPutSentence(putSentence.filter(putSentence => {
      return putSentence.word !== ' '
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
