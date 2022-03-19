import {Suspense} from 'react';
import {NextPage} from'next'
import styles from "../src/styles/Home.module.css";
import {
  SlowComponentA,
  WaitComponentA,
  SlowComponentB,
  WaitComponentB,
  Footer,
  LinkCard
} from '../src/components'

const StreamingHTML:NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Streaming HTML
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/streaming-html.tsx</code>
        </p>
        <div style={{height:'450px',width:'550px',border:'1px solid gray',marginBottom:'20px'}}>
          <Suspense fallback={<WaitComponentA/>}>
            <SlowComponentA/>
          </Suspense>
          <Suspense fallback={<WaitComponentB/>}>
            <SlowComponentB/>
          </Suspense>
        </div>
        <div className={styles.grid}>
          <LinkCard text={'Home'} path={'/'}/>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default StreamingHTML;
