import React from 'react';
import DeleteUser from "./DeleteUser"

const UserDetails = () => {
  return (
    <>
        <div className='content'>
            <div className="admin-table">
                <div className="admin-subtitle">
                    List of user details
                </div>
                <button className='btn add-btn'>Add new Users</button>
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
