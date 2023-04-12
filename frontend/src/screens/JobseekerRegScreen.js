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
    aadharNum:"",
    aadharImg:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    expertise:"",
    experience:"",
    profileImg:"",
    workSample:"",
    description:""
  })
  const handleChange = (event) => {
    
    event.preventDefault();
    console.log(event);
    
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
