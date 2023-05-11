import React from 'react';
import DeleteUser from "./DeleteUser"
import { fakeUserData } from '../assets/Api';

const UserDetails = () => {

  const addNewUser = (payload) =>{
    console.log("user name : ", payload)
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
            <DeleteUser />
        </div> 
    </>
  )
};

export default UserDetails;
