import React from 'react';
import DeleteUser from "./DeleteUser"
import { fakeUserData } from '../assets/Api';
import { addUser } from '../store/slice/UserSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const dispatch = useDispatch()

  const addNewUser = (payload) =>{
    console.log("user name : ", payload)
    dispatch(addUser(payload))
  }



  return (
    <>
        <div className='content'>
            <div className="admin-table">
                <div className="admin-subtitle">
                    List of user details
                </div>
                <button className='btn add-btn' onClick={()=>addNewUser(fakeUserData())}>Add new Users</button>
            </div>
            <ul>
            <li>ji</li>
            <li>hii</li>
            </ul>
            <hr/>
            <DisplayUsers />
            <DeleteUser />
        </div> 
    </>
  )
};

const DisplayUsers = () =>{

  const data = useSelector((state)=>{
    return state.users
  })

  return(
    <>
    <div className='userData'>
      {   
          data.map((user, id)=>{
              return <li key={id}>name: {user}</li>
          }
          )
      }
      </div>

    </>
  )
};




export default UserDetails;
