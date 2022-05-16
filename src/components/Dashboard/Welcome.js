import React from 'react'

const Welcome = () => {

    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))

  return (
    <div className='welcome'>
        <h3>welcome to Libraree, {userDetails.name}</h3>
    </div>
  )
}

export default Welcome