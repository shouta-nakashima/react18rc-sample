import React , { useEffect , useState , VFC } from 'react';
import axios from "axios";
import delay from 'delay'

type Props = {
  id:number
}

const delaySuspense = (() => {
  let pending = true;
  return () => {
    if (pending) {
      throw delay(500).then(() => (pending = false));
    }
  };
})();


const ImageView:VFC<Props> = ({id}) => {

  delaySuspense()
  const sleep = (ms: number) => {
    const startTime = performance.now();
    while (performance.now() - startTime < ms);
  }
  const [url,setUrl] = useState<string>('')

  useEffect(() => {
    if(id === 0) return
    sleep(200)
    fetchData(id).then((res) => {
      setUrl(res.data.url)
    })
  },[id])

  const fetchData = (id:number) => {
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }
  return (
    <div>
      {id > 0 ?<img key={url} alt={'image'} src={url}/>:<p>No image</p>}

    </div>
  );
};

export default ImageView;
