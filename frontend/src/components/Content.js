import React from 'react'

export default function Content() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">

      <div style={{width:'70%', marginLeft:'30px',marginTop:'50px',marginBottom:'30px', float:'left'}}>

        <h3 style={{marginLeft:'20px'}}>About</h3>

        <p className="shadow p-3 mb-5 bg-white rounded" style={{marginLeft:'20px', marginRight:'20px'}}>
        The aim of <b>City Comforts </b> is to provide a platform for users 
        to interact with a diverse range of service professionals such as 
        plumbers, carpenters, electricians and other housekeeping 
        services, in order to offer innovative, high-quality and cost-effective services.
        <br/>
        <br/>
        The application will act as a 
        mediator between the clients and the professionals of their 
        respective fields, providing convenience and choice to the customers.
        The aim is to maintain a commitment to ethical and socially responsible 
        business practices while improving accessibility to these essential services.
        </p>

      </div>

      <div style={{width:'30%', marginLeft:'30px',float:'right', marginTop:'20px'}}>
        <h4>Founder</h4>

        <ul>
          <li>Vikash Singh <br/> ( Cyber Security Specialist )</li>
          <li>Saurav Kumar <br/> ( Machine Learning Specialist )</li>
          <li>Deekashant Thakur <br/> ( Data Science Specialist )</li>
        </ul>
      </div>
    </div>
  )
}
