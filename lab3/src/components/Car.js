import React, {useState} from 'react';
import Table from './Table';

function Car(){
  const [color, setColor] = useState("red");
  const [car, setCar] = useState({
brand : "Toyota",
color : "green",
year  : 2010,
  });

  const chCar =(year,color) => {
    setColor(color);
    let y = year + 10;
    setCar({year:y});
  };

  return(
     <>
     <p>My car color is {color},year {car.year}
     </p>
     <button 
     onClick={()=>{
       chCar(2010, "green");
       }}
       >
         Change
         </button>

         <Table />
     </>
  );
}

export default Car;