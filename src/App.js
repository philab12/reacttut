import React, { useRef, useState } from 'react';

import ControlledGreeting from './ControlledGreeting';
import ControlledSelectGreeting from './ControlledSelectGreeting';

function App() {
  console.log('rendering component App');
  const [greeting, setGreeting] = useState('Hello World');
  const [greeting2, setGreeting2] = useState('Hello World');
  const [greeting3, setGreeting3] = useState('Hello World');
  const [greeting4, setGreeting4] = useState('You Are Welcome');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const inputRef = useRef();

  const clickHandler = () => {
    console.log(arguments);
    console.log(inputRef);
    setGreeting(inputRef.current.value);
    setGreeting2(text2);
    setGreeting3(text3);
    setGreeting4(text4);
  };

  const combinedChangeHandler = (txt) => {
    setText4(txt);
    setGreeting4(txt);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <h1>{greeting2}</h1>
      <h1>{greeting3}</h1>
      <h1>{greeting4}</h1>
      <div>
        <input ref={inputRef} type="text" />
      </div>
      <ControlledGreeting onTextChange={setText2} title="controlGreeting1" />
      <ControlledGreeting onTextChange={setText3} title="controlGreeting2" />
      <ControlledSelectGreeting onTextChange={combinedChangeHandler} title="Selected Test" />
      <div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
