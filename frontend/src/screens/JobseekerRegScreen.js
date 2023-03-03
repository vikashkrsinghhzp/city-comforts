import React, { useState } from 'react'
import ServiceProviderForm from '../components/ServiceProviderForm'

function JobseekerRegScreen() {
  const [jobseekerData, setJobseekerData] = useState({
    name:"",
    gender:"",
    contact:"",
    email:"",
    password:"",
    cpassword:"",
    aadhar_num:"",
    aadhar_img:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    expertise:"",
    experience:""
  })
  const handleChange = (event) => {
    console.log(event);
    event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newJobseeker = {...jobseekerData};
    newJobseeker[fieldName]=fieldValue;
    setJobseekerData(newJobseeker);
    console.log(jobseekerData);
  }
  return (
    <div>
      <ServiceProviderForm handleChange={handleChange} jobseekerData={jobseekerData} setJobseekerData={setJobseekerData}/>
    </div>
  )
}

export default JobseekerRegScreen
