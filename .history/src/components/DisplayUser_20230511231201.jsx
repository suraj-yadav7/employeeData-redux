import React from 'react'
import { useSelector } from 'react-redux';


const DisplayUser = () =>{

    const data = useSelector((state)=>{
      return state.user
    })

    return(
      <>
      <div className='userData'>
        {   
            data.map((user, id)=>{
              return(
                <li key={id}>name: {user}</li>
                )
              }
            )
        }
        </div>
  
      </>
    )
  };
export default DisplayUser
