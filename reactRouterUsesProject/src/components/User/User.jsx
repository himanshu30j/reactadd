import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-900 text-lg text-center text-white'>User {userid}</div>
  )
}

export default User