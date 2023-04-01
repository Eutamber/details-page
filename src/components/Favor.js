import React, { useState} from 'react'
import { FaHeart } from "react-icons/fa";


function Favor (){
    const [state, setState] = useState(false);

    const toggle=()=>{
        setState(!state);
    }
  return (
    <div>
        <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--close':'')}>
            {state ? <FaHeart className='heart'/> :<FaHeart  className='heart-like'/>}
        </button>
    </div>
  );
}

export default Favor;
