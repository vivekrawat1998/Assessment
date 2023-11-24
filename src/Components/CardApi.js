import React from 'react'
import { useState,useEffect } from 'react';
import Card from './Card';

const CardApi = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(' https://randomuser.me/api/?page=1&results=1&seed=abc');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const results = await response.json();
          console.log(results)
          setData(results)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []); 

    return (
        <div>
        {data && data.results && data.results.map((data,index) =>
         (<div key={index}> 
         <Card  data={data}/>
            </div> 
           
        ))}
      </div>
  )
}

export default CardApi