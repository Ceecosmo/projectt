import React from 'react'
import pic1 from '../assets/images/1.png';
import pic2 from '../assets/images/2.png';
import pic3 from '../assets/images/3.png';
import pic4 from '../assets/images/4.png';
import pic5 from '../assets/images/5.png';
import pic6 from '../assets/images/6.png';

function Card2() {
// an Array of objects
const CardData = [
  { image: pic1, title: 'Air Freight', content_text: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
  { image: pic2, title: 'Sea Freight', content_text: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
  { image: pic3, title: 'Land Freight', content_text: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
  { image: pic4, title: 'Warehousing', content_text: 'Package and store your things effectively and securely to make sure them in...' },
  { image: pic5, title: 'Door to Door Delivery', content_text: 'Our expertise in transport management and planning allows us to design ...' },
  { image: pic6, title: 'Packaging & Storage', content_text: 'Package and store your things effectively and securely to make sure them ...' },
  // Add more card data objects as needed
];

  return (
    <>
<div className="container-fluid">
<div className="row">
{CardData.map((Card2, index) => (
<div className="col-md-4 mb-3" data-aos="fade-up">
<div className="card">
  <img src={Card2.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title ">{Card2.title}</h4>
    <p className="card-text">{Card2.content_text}
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

export default Card2