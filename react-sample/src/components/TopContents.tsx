import React,{Dispatch,SetStateAction,VFC} from 'react';
import '../App.css';

type Props = {
  setValue: Dispatch<SetStateAction<string>>
}

const TopContents:VFC<Props> = ({setValue}) => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{width:'30%'}}>
        <img
          alt={'画像'}
          src={'/nakashima_san_icon.jpg'}
          style={{borderRadius:'50%',objectFit:'cover',height:350}}
        />
        <p>Hi!! my name is SHOTA</p>
      </div>
      <div style={{width:'30%'}}>
        <h3>React18RC demo site</h3>
        <h4>Content details</h4>
        <div style={{textAlign:'start',marginLeft:'135px'}}>
          <p className={'text'} onClick={() => setValue('Automatic Batching')}>Automatic Batching</p>
          <p className={'text'} onClick={() => setValue('Transition')}>Transition</p>
          <p className={'text'} onClick={() => setValue('DeferredValue')}>DeferredValue</p>
          <p className={'text'} onClick={() => setValue('Suspense')}>Suspense</p>
        </div>
      </div>
    </div>
  );
};

export default TopContents;
