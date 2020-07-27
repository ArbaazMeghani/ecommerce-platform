import React from 'react'
import { useHistory } from 'react-router-dom'

const Confirmation = ({location}) => {
  const history = useHistory()

  if(location.search === "" || location.search.split("=")[1] === "undefined") {
    history.push("/")
  }

  return (
    <div style={{width: "100%", height: "50vh", margin: "0 auto", textAlign: "center"}}>
      <h1>Thank you</h1>
      <h3>Your order Id: {location.search.split("=")[1]}</h3>
    </div>
  )
}

export default Confirmation