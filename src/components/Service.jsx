import React from 'react'
import Card2 from './Card2'
import Services from '../assets/images/services.png';

// import Services from './assets/images/services.png';

function Service() {
    
  return (
    <>
        <div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Service</h2>
                <p data-aos="fade-up-left">Home <i className="fa fa-arrow-right ms-3 me-3"></i> Service</p>
            </div>
        </div>

        <div className="container mt-5">

          <Card2/>

          <div className="row pt-5">
            <div className="col-md-6">
<img src={Services} alt="" className='img-fluid' data-aos="fade-up" />
            </div>
            <div className="col-md-6" data-aos="fade-up">
            <h2>THE COMPLETE SOLUTION</h2>
                    <div className='bg-red'></div>
                    <div className="pt-3" data-aos="fade-up">
                        <p>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
                    </div>
            </div>
          </div>
        </div>

       </>
  )
}

export default Service