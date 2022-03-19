import {VFC} from 'react';
import Link from "next/link";

type Props = {
  text:string
  path:string
}

const LinkCard:VFC<Props> = ({text,path}) => {
  return (
    <Link href={path}>
      <a>
        <div style={{width:'300px',height:'60px',border:'1px solid gray',textAlign:'center',padding:'20px 0',borderRadius:'10px'}}>
          <p style={{margin: 0}}>{text}</p>
        </div>
      </a>
    </Link>
  );
};

export default LinkCard;
