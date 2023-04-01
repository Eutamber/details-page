import React, { useState} from 'react'

export const IncDec = () => {
    const [num, setNum] = useState(1);
    const IncF = () =>{
        setNum(num + 1);
    };
    const DecF = () =>{
        if(num >1){
            setNum(num - 1);
        }        
    };
  return <div>
            <button className='btn_div' onClick={IncF}>+</button><span>&nbsp; {num}</span>
            &nbsp;&nbsp; 
            <button className='btn_div' onClick={DecF}>-</button>
        </div> 
}
