import {VFC} from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import delay from "delay";

const delaySuspense = (() => {
  let pending = true;
  return () => {
    if (pending) {
      throw delay(5000).then(() => (pending = false));
    }
  };
})();

const SlowComponentC:VFC = () => {
  delaySuspense()
  return (
    <div style={{width:'100px',height:'100px',border:'1px solid gray',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'54px'}}>
      <Image className={styles.image} src={'/nakashima_san_icon.jpg'} width={100} height={100} objectFit={'cover'} />
    </div>
  );
};

export default SlowComponentC;
