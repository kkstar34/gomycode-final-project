import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const Navigate = useNavigate();
    const returnToHome = () => {
        Navigate("/");
    }
  return (
    <div>
        <span>NOT FOUND </span>
        <br />
        <button className="btn btn-primary" onClick={returnToHome}><i className="fas fa-return"></i> GO TO HOME</button>
    </div>
  )
}

export default NotFound