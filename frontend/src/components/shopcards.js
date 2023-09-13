import './shopcards.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';

const Beer = () => {
  const [item, setItem] = useState([]);
 const [start, setStart] = useState(0);
const [end, setEnd] = useState(10);

const handlerNextPage = () =>{
  setStart(start +10)
  setEnd(end +10)
if(end >= 80){
  setStart(0) 
  setEnd(10)
}
}
const handlerAddBasket = (product) => {
  let array =[]
  
  console.log(product)

}
console.log(start, end)



  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
    const data = await response.json();
    setItem(data)
    console.log(data)
  }

useEffect(() => {
 getBeer();
}, []);



return (
   <div className='contianer'> 
  <div className="cards-grid-wrap">
     
      {
          item.slice(start, end).map((info, index) =>  {
              return (

                  <div className="card_item" key={info.id}>
                      <div className="card_inner">
                          <img className='card_img' src={info.image_url} alt="" />
                          </div><div className="beerName">{info.name}
                          
                            <div className="detail-box">
                              <div className="gitDetail"></div>
                              <div className="gitDetail">{info.volume.value} liters</div>
                              <div className="gitDetail"> {info.ingredients.malt[0].name}</div>
                          </div>
                          <button onClick={()=> handlerAddBasket (info)} className="seeMore"> Add</button>
                           
                          
                      </div>
                      

                  </div>
              )
          })
      }
<button onClick={()=> handlerNextPage ()}> Next Page</button> 
  </div> 
              
  </div>  
    );
  

}

export default Beer






















