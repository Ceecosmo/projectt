import React from 'react'
import FORM from './Form'
import ICON1 from '../assets/images/icon2.png'
import ICON3 from '../assets/images/icon3.png'
import ICON2 from '../assets/images/icon2.png'



function Contact() {
  return (
    <>
    <div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Contact</h2>
                <p data-aos="fade-up-left">Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
            </div>
        </div>



    <div className="container mt-5" >
<div className="row">
 <div className="col-md-6" data-aos="fade-up">
 <h2>WHY CHOOSE US?</h2>

 <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON1} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Global supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON2} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Mobile shipping Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={ICON3} alt=""  className='img-fluid'/>
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Careful handling Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
 </div>
<div className="col-md-6" data-aos="fade-up">
<h2>Request a Quote</h2>
<FORM/>
</div>

</div>
</div>

    
    </>
  )
}

export default Contact