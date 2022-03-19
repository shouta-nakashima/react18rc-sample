import React,{useState,useCallback,VFC} from 'react';
import { flushSync } from "react-dom";


const AutoBatch:VFC = () => {
  const [select,setSelect] = useState('v18')
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleSelect = useCallback( (value:string) => {
    setSelect(value)
  },[setSelect])

  const handleIncrement = useCallback(() => {
    setTimeout(() => {
      if(select === 'v18') {
        setCount1((count) => count + 1);
        setCount2((count) => count + 1);
        setCount3((count) => count + 1);
      } else {
        flushSync(() => setCount1((count) => count + 1));
        flushSync(() => setCount2((count) => count + 1));
        flushSync(() => setCount3((count) => count + 1));
      }
    }, 500);
  }, [select]);

  const handleDecrement = useCallback(() => {
    setTimeout(() => {
      if(select === 'v18') {
        setCount1((count) => count - 1);
        setCount2((count) => count - 1);
        setCount3((count) => count - 1);
      } else {
        flushSync(() => setCount1((count) => count - 1));
        flushSync(() => setCount2((count) => count - 1));
        flushSync(() => setCount3((count) => count - 1));
      }
    }, 500);
  }, [select]);

  console.log("rendering component");

  return (
    <div>
      <select value={select} onChange={(e) => handleSelect(e.target.value)}>
        <option value={'v18'}>version 18</option>
        <option value={'v17'}>version 17</option>
      </select>
      <div>
        <h3>Please check with your browser's verification tool.</h3>
        <p>Here, the operation is reproduced in a pseudo manner.</p>
        <p>Notice the number of renders when the event handler is asynchronous.</p>
      </div>
      <div>
        <p>{count1}</p>
        <p>{count2}</p>
        <p>{count3}</p>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default AutoBatch;
