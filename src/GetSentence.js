import React, { useState } from 'react';
import ArraySentence from "./ArraySentence";

const GetSentence = () => {
  
  const [sentence, setSentence] = useState(
    {
      word:"",
      corret:true,
    }
  );

  const [putSentence, setPutSentence] = useState([]);

  const onChange = (e) => {
    const {name, value} = e.target;
    setSentence({...sentence, [name]:value})
  }

  const onClick = () => {
    setPutSentence([...putSentence,(sentence)])
    setSentence({
      word:"",
      corret:true,
    })
  }

  const onKeyPress = (e) => {
    if(e.key === ' ') {
      onClick();
    }
  }

  return (
    <div>
      <input name = "word" onChange={onChange} onKeyUp={onKeyPress} value={sentence.word}></input>
      <button onClick={onClick}>등록</button>
      <ArraySentence putSentence={putSentence}/>
    </div>
  );
}

export default GetSentence;
