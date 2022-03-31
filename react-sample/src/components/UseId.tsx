import React,{useId} from 'react';

const UseId = () => {
  const useDataMapping = () => {
    const arr = []
    const dataId = useId()
    for ( let i = 0; i < 5 ; i++) {
      const data = {text:String(i),id:dataId + String(i)}
      arr.push(data)
    }
    return arr
  }
  return (
    <div>
      {useDataMapping().map((d) => (
        <div key={d.id}>
          <p>data index is {d.text}</p>
          <p>data id is {d.id}</p>
        </div>
      ))}
    </div>
  );
};

export default UseId;
