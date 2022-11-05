import { useEffect, useState } from "react";
import axios from "axios";

const TestApi = () => {
    // get data from API
   
    let address = 2
    const url = `https://jsonplaceholder.typicode.com/todos/${address}`;

    const getAllTickets = () => {
        axios.get(`${url}`)
        .then((response) => {
       
            console.log(response)
            
        })
        .catch((error) => console.log(`Error: ${error}`));
    }

    useEffect(() => {
        getAllTickets();
    }, [])

    return (
      <>
         <ul>
             { 
                   
              }
           </ul> 
      </>
    )
}





export default TestApi;