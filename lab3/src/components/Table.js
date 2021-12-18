import React from 'react';

const getTable = (cars) => {
    return  cars.map((car)=>{
        const {id,brand,year} = car;
        return(
            <tr> 
                 <td>{id}</td>
                 <td>{brand}</td>
                 <td>{year}</td>
            </tr>     
        );   
    });
};

function Table() {
const cars = [
    {id: 1, brand: "toyota", year: 2010},
    {id: 2, brand: "mazda", year: 2012},
];

     return(
        <table> 
             <tbody>{getTable(cars)}</tbody>            
        </table>
    );
}

export default Table;