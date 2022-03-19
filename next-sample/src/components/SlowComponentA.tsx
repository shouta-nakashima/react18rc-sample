import Image from 'next/image'
import delay from 'delay'
import {VFC} from 'react'

const delaySuspense = (() => {
  let pending = true;
  return () => {
    if (pending) {
      throw delay(2000).then(() => (pending = false));
    }
  };
})();

const SlowComponentA:VFC = () => {
  delaySuspense()
  return (
    <div style={{width:'100%',height:'80px',display:'flex',justifyContent:'space-between',backgroundColor:'lightblue',padding:'10px 30px'}}>
      <Image src={'/vercel.svg'} width={80} height={60}/>
      <div>
        <p>Hello!! use Suspense!!</p>
      </div>
    </div>
  );
};

export default SlowComponentA;
