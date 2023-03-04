import React, { useState } from 'react'
import Login from '../components/Login'

function LoginScreen() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        console.log(event);
        event.preventDefault();
        
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const currentData = {...loginData};
        currentData[fieldName]=fieldValue;
        setLoginData(currentData);
        console.log(currentData);
      }
  return (
    <div>
      <Login handleChange={handleChange} loginData={loginData} setLoginData={setLoginData} />
    </div>
  )
}

export default LoginScreen
