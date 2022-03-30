import React , { useDeferredValue , useMemo , useState, Suspense } from 'react';
import {ImageView} from './index'



const DeferredValue = () => {
  const [value,setValue] = useState('')
  const [def,setDef] = useState('')
  const deferredValue = useDeferredValue(value);

  const deferredPhoto = useMemo(() => <ImageView id={deferredValue.length}/>,[deferredValue])
  const defaultPhoto = useMemo(() => <ImageView id={def.length}/>,[def])

  return (
    <div>
      <div style={{display:"flex",justifyContent:'space-around',marginRight:'20px'}}>
        <div style={{width:'50%'}}>
          <p>useDeferredValue</p>
          <input style={{marginRight:'20px'}}  value={value} onChange={(e) => setValue(e.target.value)}/>
          <p style={{fontSize:'16px'}}>input length {value.length}</p>
          <p style={{fontSize:'16px'}}>image ID {deferredValue.length}</p>
          <Suspense fallback={<p style={{fontSize:'32px'}}>Loading...</p>}>
            {deferredPhoto}
          </Suspense>
        </div>
        <div style={{width:'50%'}}>
          <p>Do not use useDeferredValue</p>
          <input value={def} onChange={(e) => setDef(e.target.value)}/>
          <p style={{fontSize:'16px'}}>input length {def.length}</p>
          <p style={{fontSize:'16px'}}>image ID {def.length}</p>
          <Suspense fallback={<p style={{fontSize:'32px'}}>Loading...</p>}>
            {defaultPhoto}
          </Suspense>
        </div>
      </div>


    </div>
  );
};

export default DeferredValue;
