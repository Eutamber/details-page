import React, { useState }from 'react';
import Popup from './components/Popup';
import './App.css';
import "./Popup.css";
import DetailsThumb from './components/DetailsThumb';
import { IncDec } from './components/IncDec';

import Favor  from './components/Favor';
class App extends React.Component{ 
 
  state = {
    products: [
      {
        "_id": "1",
        "title": "Electric scooter",
        "src": [
            "https://evbikethailand.com/wp-content/uploads/2021/09/F45_Small-673x1024.png",
            "https://evbikethailand.com/wp-content/uploads/2021/09/STR2_Small-min-858x1024.png",
            "https://store.lnwgadget.com/media/catalog/product/cache/1/image/850x850/9df78eab33525d08d6e5fb8d27136e95/s/b/sb-1_1.jpg",
            "https://store.lnwgadget.com/media/catalog/product/cache/1/thumbnail/850x850/9df78eab33525d08d6e5fb8d27136e95/s/b/sb-4_1.jpg"
          ],
        "description": "Xiaomi เปิดตัวรถสกู๊ตเตอร์ไฟฟ้ารุ่นใหม่ชื่อว่า “Mijia” ซึ่งมีขนาดเล็กและถูกกว่า QiCycle จักรยานไฟฟ้าของ Xiaomi ",
        "content": "สกู๊ตเตอร์ไฟฟ้ารุ่นนี้มาพร้อมกับแบตเตอรี่แบบ Lithium-ion จาก LG 280Wh ซึ่งทางบริษัทระบุว่าทำให้สามารถวิ่งไปได้ไกลถึง 30 กิโลเมตรต่อการชาร์จครั้งเดียวเท่านั้น ส่วนประสิทธิภาพด้านกำลังขับเคลื่อนเลือกใช้งานมอเตอร์ขนาด 500W สามารถทำความเร็วสูงสุดได้ 25 กิโลเมตรต่อชั่วโมง",
        "price": 500,        
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }
  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>
              <div className= "box">                             
                <h2>{item.title}</h2>                                                       
              <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />              
              
                <div className="row">                 
                  <span>{item.price} BAHT</span>                  
                  <Favor/> 
                </div>            

                <p>{item.description}</p>
                <p>{item.content}</p>                          
                <Button/>          

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

function Button() {  
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div>                          
      <main>                         
        <button onClick={() => setButtonPopup(true)} className="Cart">Add to cart</button>
        &nbsp;&nbsp;
        <button className="Message">Message</button>
        &nbsp;&nbsp;
        
        </main>
        <Popup trigger={buttonPopup} setTrigger= {setButtonPopup} >        
          <h3>สี</h3>
          <button className="box-color"></button>
          &nbsp;&nbsp;
          <button className="box-color"></button>
          &nbsp;&nbsp;
          <button className="box-color"></button>
          &nbsp;&nbsp;
          <button className="box-color"></button> 
          &nbsp;&nbsp; 
          <br/>                          
          <h4>รุ่น</h4>
          <select name="language" className='choice'>
            <option value={"1"} >1</option>
            <option value={"2"}>2</option>                      
          </select> 
          <br/><br/>
          <h5>จำนวน</h5>         
          <IncDec/>
          <br/>
          <button className="Cart-popup" >เพิ่มลงตะกร้า</button>   
          &nbsp;&nbsp;        
          <button className="Buy-popup">ซื้อทันที</button>
        </Popup>             
           
      
      </div> 
      

  );
  
}
export default App;