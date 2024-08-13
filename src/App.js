import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const[hotels, setHotels] = useState(data);
  const[showText, setShowText] = useState(false)
  const[showMore, setShowMore] = useState(false);

  const removeHotelName =(id) =>{
    let newHotels = hotels.filter (hotelName => hotelName.id!==id);
    setHotels(newHotels)
  }
  
  const showTextClick = (item)=>{
    item.showMore = !item.showMore
    setShowText(!showText)
  }
  return (
    <div>
      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS</h1>
    </div>

    <div>
    {hotels.map((item =>{
      const {id, hotelName, description, image, source, showMore} = item;
      return ( <div key = {id}>
        <div className='container'>
        <h2>{id} - {hotelName}</h2>
        </div>

        <div className='container'>
        <p>{showMore? description : description.substring(0,220) + "..."}
          <button onClick={()=>showTextClick (item)}>{showMore ? "Show less": "Show more"}</button>
        </p>
        </div>

        <div className='container'>
        <img src={image} width="500px" alt='hotel in NYC'/>
        </div>

        <div className='container'>
        <p>{source}</p>
        </div>

        <div className='container'>
        <button className='btn' onClick={() =>removeHotelName(id)}>remove</button>
        </div>

        </div>)
  }))}

    </div>

    </div>
  )
}

export default App;
