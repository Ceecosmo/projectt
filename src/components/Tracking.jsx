import React from 'react'
import FORM2 from './Form2'

function Tracking() {
  return (
    <>

<div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Tracking</h2>
                <p data-aos="fade-up-left">Home <i className="fa fa-arrow-right ms-3 me-3"></i>Tracking</p>
            </div>
        </div>

        <div className="container">
    <div className="row pt-5">
           
            <div className="col-md-6" data-aos="fade-up">
            <h2>TRACK YOUR SHIPMENT</h2>
                    <div className='bg-red'></div>
                    <div className="pt-3" data-aos="fade-up">
                        <p style={{textAlign:'justify'}}>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
                    </div>
            </div>


           

             <div className="col-md-6">
             <FORM2/>

          </div>
            </div>
          </div>
    
    </>
  )
}

export default Tracking