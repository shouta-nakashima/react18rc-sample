import React,{useState,useCallback,startTransition} from 'react';


const Transition = () => {
  const sleep = (ms: number) => {
    const startTime = performance.now();
    while (performance.now() - startTime < ms);
  }
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);


  const handleClick = useCallback(() => {
    setCount1((count) => count + 1);
    setCount2((count) => {
      sleep(700)
      return count + 1
    })
  }, []);
  const handleClickUseTransition = useCallback(() => {
    setCount3((count3) => count3 + 1);
    startTransition(() => {
      setCount4((count) => {
        sleep(1000)
        return count + 1
      })
    })
  }, []);
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{width:'30%'}}>
        <p>Do not use Transition</p>
        <p>{count1}</p>
        <p>{count2}</p>
        <button onClick={handleClick}>Increment</button>
        <p style={{fontSize:'14px'}}>Please hit repeatedly</p>
      </div>
      <div style={{width:'30%'}}>
        <p>Use Transition</p>
        <p>{count3}</p>
        <p>{count4}</p>
        <button onClick={handleClickUseTransition}>Increment</button>
        <p style={{fontSize:'14px'}}>Please hit repeatedly</p>
      </div>

    </div>
  );
};

export default Transition;
