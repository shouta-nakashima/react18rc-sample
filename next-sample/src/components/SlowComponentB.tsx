import {Suspense,VFC} from 'react';
import Link from "next/link";
import delay from "delay";
import styles from "../styles/Home.module.css";
import {SlowComponentC,WaitComponentC} from './index'

const delaySuspense = (() => {
  let pending = true;
  return () => {
    if (pending) {
      throw delay(5000).then(() => (pending = false));
    }
  };
})();

const SlowComponentB:VFC = () => {
  delaySuspense()
  return (
    <div style={{width:'100%', height:'368px',backgroundColor:'lightgreen', display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Suspense fallback={<WaitComponentC/>}>
        <SlowComponentC/>
      </Suspense>
      <div>
        <p>Hi! my name is SHOTA!!</p>
        <p>Thanks for waiting</p>
        <p>Please press it before displaying the image.</p>
        <p>↓</p>
        <Link  href={'/'}>
          <a className={styles.link}>
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SlowComponentB;
