import { useCallback , Dispatch , VFC ,SetStateAction} from 'react';
import logo from "../logo.svg";
import '../App.css';

type Props ={
  value:string
  setValue: Dispatch<SetStateAction<string>>
}
const Header:VFC<Props> = (props) => {
  const {value,setValue} = props
  const navData = [
    {id:1,value:'Automatic Batching'},
    {id:2,value:'Transition'},
  ]
  const handleChange = useCallback((text:string) => {
    setValue(text)
  },[setValue])
  return (
    <header style={{display:'flex',width:'100%',height:'100px'}}>
      <div style={{display:'flex',width:'50%'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{cursor:'pointer'}} onClick={() => setValue('Content details')}>React18RC demo</p>
      </div>
      <nav className={'nav'}>
        {navData.map((data) => (
          <div  key={data.id}>
            <p className={'nav-link'} onClick={() => handleChange(data.value)}>
              {data.value}
            </p>
            {value === data.value ? <hr/>:<></>}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
