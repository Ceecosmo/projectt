import React from 'react'
import LOGO from '../assets/images/logo55.png'

function Headers() {
  return (
    <>

{/* bg-body-tertiary */}

<nav className="fixed-top navbar navbar-expand-lg bg-dark  "style={{ height: '70px'}} >
  <div className="container" >
    <a className=" navbar-brand" href="/" ><img src={LOGO} /></a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation ">
      <span className="navbar-toggler-icon "></span>
    </button>


    {/* <div className="nav-links text-center"style={{ marginRight: '150px'}} > */}
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto" >
    
        <li className="nav-item " >
          <a className="nav-link active text-danger " aria-current="page" href="/"><i className="fa-solid fa-house"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/Service"><i className="fa-brands fa-servicestack"></i>Services</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-light" href='/Tracking'><i className="fa-solid fa-book"></i>Tracking</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light" href='/Contact'><i className="fa-solid fa-phone"></i>Contact</a>
        </li>

      </ul>
     
     
       <a href='' className="btn btn-danger" type="submit">Request a Code</a>
      
    </div>
    
    
  </div>
</nav>
      
    </>
  )
}

export default Headers