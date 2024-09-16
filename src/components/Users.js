import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userdelete } from '../reducers/UserReducer'
const Users = () => {

  const {users} = useSelector(state=>state.UserReducer);
  const dispatch = useDispatch();

  const DeleteHandler = (index)=>{

   dispatch(userdelete(index));

  }
  return (
    <>
      <div className='main-content'>

        <h1 className='heading-main-content'>User List</h1>

        {users.map((user,index)=>{
          return <div key={user.id}>
          <h1> {user.name} {" "} <span onClick={()=>DeleteHandler(index)}> X</span> </h1>
          </div>
        })}
      </div>
    </>
  )
}

export default Users