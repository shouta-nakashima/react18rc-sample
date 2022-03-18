import {FC} from 'react';
import {Transition,AutoBatch,DeferredValue,SuspenseDemo,TopContents} from './index'

type Props = {
  value:string
}

const Container:FC<Props> = (props) => {
  const {value} = props
  return (
    <div>
      <h2>{value}</h2>
      {value === 'Content details' ? <TopContents/> : undefined}
      {value === 'Automatic Batching' ? <AutoBatch/> : undefined}
      {value === 'Transition' ? <Transition/> : undefined}
      {value === 'DeferredValue' ? <DeferredValue/>: undefined}
      {value === 'Suspense' ? <SuspenseDemo/>: undefined}
    </div>
  );
};

export default Container;
