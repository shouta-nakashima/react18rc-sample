import { Dispatch , FC , SetStateAction } from 'react';
import {Transition,AutoBatch,DeferredValue,SuspenseDemo,TopContents} from './index'

type Props = {
  value:string
  setValue: Dispatch<SetStateAction<string>>
}

const Container:FC<Props> = (props) => {
  const {value,setValue} = props
  return (
    <div>
      <h2>{value === 'Content details' ? 'Home' : value}</h2>
      {value === 'Content details' ? <TopContents setValue={setValue}/> : undefined}
      {value === 'Automatic Batching' ? <AutoBatch/> : undefined}
      {value === 'Transition' ? <Transition/> : undefined}
      {value === 'DeferredValue' ? <DeferredValue/>: undefined}
      {value === 'Suspense' ? <SuspenseDemo/>: undefined}
    </div>
  );
};

export default Container;
