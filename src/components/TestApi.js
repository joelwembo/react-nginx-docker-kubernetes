import { useEffect, useState } from "react";
import axios from "axios";

const TestApi = () => {
    // get data from API
    const [tickets, getTickets] = useState('');
    let address = 'london'
    const url = `http://127.0.0.1:8000/select_destination/${address}`;

    const getAllTickets = () => {
        axios.get(`${url}`)
        .then((response) => {
            const allTickets = response.data;
            getTickets(allTickets)
            console.log(allTickets)
            
        })
        .catch((error) => console.log(`Error: ${error}`));
    }

    useEffect(() => {
        getAllTickets();
    }, [])

    return (
      <>
         <ul>
             { getAllTickets.map((amadeus) => 
                  <li> 
                        {                       
                            amadeus.data.address                      
                        }
                   
                   </li>)
                   
              }
           </ul> 
      </>
    )
}





export default TestApi;