import React from 'react'
import About from '../assets/images/about.jpg'
import ICON1 from '../assets/images/icon1.png'
import ICON2 from '../assets/images/icon2.png'
import ICON3 from '../assets/images/icon3.png'
import Card1 from './Card'
import FORM from './Form'


function HomePage() {
  return (
    <>

<div className="bg-image ">
<div className="container text-light ">
            <div className="pt-5 text-center" data-aos="fade-down-right">
            <h1 className='pt-5' style={{fontSize:'48',fontWeight:'bold',marginTop:'60px'}}>
            Easy & Quick Cargo  Shipping Services 
            </h1>
            <p style={{fontSize:'24px',fontWeight:'700px'}}>Book low cost sea freight shipping services. 
            Get an instant quote.</p>
           </div>
        </div>
        <div className="container text-center" data-aos="fade-up-left">
        <a href="/tracking" className="btn btn-danger">Track Goods Here</a>
        </div>  
       </div> 
       

{/* 
       <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     
    <img src={About} className="d-block w-50" alt="about" />
       
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={About} className="d-block w-100" alt="about" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







 */}



<div className="container pt-5">
<div className="text-center " data-aos="fade-up">
  <h2>Welcome Crystal Shipment</h2>
  <div className="bg-red mx-auto"></div>
<p>Crystal Shipment is more than logistics. We can also optimize your packaging, 
manage your materials sourcing, and so much more.</p>
</div>



<div className="container-fluid pt-3">
   <div className="row">

      <div className="col mt-6">
      <img src={About} className="rounded img-fluid mb-5" alt="about" />
          
        
      </div>

      <div className="col-md-6" data-aos="fade-up">
        <p className='text-danger'>TRANSPORTATION COMPANY</p>
        <h2>We Provide Full Range Logistics Solution</h2>
        <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
        <a href="/Service" className="btn btn-danger">Learn More</a>
        
        </div>

   </div>
   </div></div>


<div className="container pt-5 ">
  <div className="text-center"><p className='text-danger'> TYPES OF LOGISTICS </p>
    <h2>Covering All Logistics Fields</h2>
    </div>


<Card1/>
<div className="text-center "data-aos="fade-up">

  <a href="/Service" className="btn btn-danger">Load More</a>
  
</div>
</div>


<div className="bg-warning mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
     <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">Request a Quote</a> 
            </div>
          </div>
          
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

export default HomePage