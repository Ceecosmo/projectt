import React,  { useState }  from 'react'

function Form2() {

  const [formData, setFormData] = useState({
    
    email: '',
   
});

//error message
const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };


    const validateForm = () => {
      const errors = {};
      
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
      }
      
       // You can add more validation rules for other fields as needed
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };



    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Process form submission
        alert('Message sent Successfully')
        
        console.log(formData);
        // Redirect to another page
        window.location.href = '/';
      }
    };
  

    
  return (
    <>
<form action="" onSubmit={handleSubmit}>

<div className="flex-grow-1 ms-2">


<h4>OUR NEWSLETTER</h4>
<p>Sign up today for tips and latest news and exclusive special offers.</p>
            
<input type="email" name='email' value={formData.email}  className={`form-control mt-3 mb-3 ${errors.email && 'is-invalid'}`} placeholder='Email' onChange={handleChange}/> 
{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
<button className="btn btn-danger">Submit</button>


</div>

           
</form>






    </>
  )
}

export default Form2