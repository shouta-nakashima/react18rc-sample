import React from 'react';
import { Loading } from "./index";

const WaitComponentB = () => {
  return (
    <div style={{width:'100%', height:'368px',backgroundColor:'lightgreen', display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Loading/>
    </div>
  );
};

export default WaitComponentB;
