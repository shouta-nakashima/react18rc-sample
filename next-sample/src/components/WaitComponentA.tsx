import React from 'react';
import Image from "next/image";

const WaitComponentA = () => {
  return (
    <div style={{width:'100%',height:'80px',display:'flex',justifyContent:'space-between',backgroundColor:'lightblue',padding:'10px 30px'}}>
      <Image src={'/vercel.svg'} width={80} height={60}/>
      <div>
        <p>please wait...</p>
      </div>
    </div>
  );
};

export default WaitComponentA;
