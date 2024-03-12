import React from 'react'
import pic1 from '../assets/images/1.png';
import pic2 from '../assets/images/2.png';
import pic3 from '../assets/images/3.png';

function Card() {
// an Array of objects
const CardData = [
  { image: pic1, title: 'Air Freight', content_text: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
  { image: pic2, title: 'Sea Freight', content_text: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
  { image: pic3, title: 'Land Freight', content_text: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
  // Add more card data objects as needed
];

 
  return (
    <>
<div className="container-fluid">
<div className="row">
{CardData.map((Card, index) => (
 
<div className="col-md-4 mb-3 " data-aos="fade-up">

<div className="card">

  <img src={Card.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title ">{Card.title}</h4>
    <p className="card-text">{Card.content_text}
    <a href="/Service" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              
            
              </div> 
              </div>
              </div>



))}

</div>
</div>  
    </>
  )
}

export default Card