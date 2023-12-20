import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {id}=useParams()
  return (
    <div>
      <h1>user profile page</h1>
      <p>user id<b>{id}</b></p>
    </div>
  )
}

export default User
