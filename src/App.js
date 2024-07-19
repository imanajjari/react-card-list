import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { useState } from 'react';
import Card from './cards/card';

function App() {
  const [data, setData] = useState([
      {
        id:0,
        Title: "kish",
        Description: "is a major city in the Central District of Isfahan County, Isfahan province, Iran. It is the capital of the province, the county, and the district.[6] It is located 440 kilometres (270 miles) south of Tehran.[7] The city has a population of approximately 2,220,000,[8] making it the third-most populous city in Iran, after Tehran and Mashhad, and the second-largest metropolitan area.",
        Number: 12,
        photoName: "image/kish-island.jpg",
        status: true,
      },
      {
        id:1,
        Title: "yazd",
        Description: " is a city in the Central District of Yazd County, Yazd province, Iran, serving as capital of the province, the county, and the district.[6] Yazd is 270 km (170 mi) southeast of Isfahan. ",
        Number: 2,
        photoName: "image/Moshir_Caravansary_03.jpg",
        status: true,
      },
      {
        id:2,
        Title: "Tabriz",
        Description: "is a coastal city in, and the capital of, Kish District of Bandar Lengeh County, Hormozgan province, Iran.[4] The city is on Kish Island, a special zone of Iran. The island is served by Kish International Airport, and has a visa policy separate from the Iranian mainland, such that foreign tourists can obtain a visa on arrival.",
        Number: 1,
        photoName: "image/Panorama_of_Tabriz.jpg",
        status: true,
      },
    ])
    const [cards, setCards] = useState([])

  const addHandeler = (id) => {
    const index = data.findIndex((item) => item.id === id)
    if (id !== -1){
      const updateDate = [ ...cards , data[id] ];
      data[id].Number -= 1;
      setCards(updateDate)
    }
  }
  const deleteHandeler = (id) => {
    const index = data.findIndex((item) => item.id === id)
    if (id !== -1){
      const updateDate = [ ...cards ];
      updateDate.splice(index, 1);
      data[id].Number += 1;
      setCards(updateDate)
    }
    // const updateDate = data.filter((item) => item.id !== index)
    // setData(updateDate)
    // console.log(index);
  }
  return (
    <div className="App">
      <Header></Header>
      {cards.length >0 && <div className='title-box'><h1>my cards</h1></div>}
      <div className='content-contaner'>
      {cards.map((item , index) =>{
          return(
<Card {...cards[index]}>
<a href="#" className="delete-tag" onClick={() => deleteHandeler(index)}>
          delete <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="red">
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>       </svg>
        </a>
</Card>
          )})}
          </div>
          <div className='title-box'>
      <h1>lsit</h1>
      </div>
      <div className='content-contaner'>
      {data.map((item , index) =>{
          return(
        <Card {...data[index]}>
          <p>
            number : { data[index].Number > 0 ?  data[index].Number : 'End of inventory'} 
          </p>

          { data[index].Number > 0 && <a href="#" className="add-tag" onClick={() => addHandeler(index)}>add to card <span className="sr-only">about this is some title</span><svg xmlns="http://www.w3.org/2000/svg" className="icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></a> }
        </Card>
          )})}
          </div>
    </div>
  );


}

export default App;
