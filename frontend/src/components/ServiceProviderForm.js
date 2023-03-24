import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function ServiceProviderForm(props) {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    const navigate = useNavigate();

    const SendData = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("upload_preset", "city-comforts");
        data.append("file", image);
        await axios.post('https://api.cloudinary.com/v1_1/dd1sbx4hb/image/upload', data)
        .then(res => setUrl(res.data.url))
        .catch(err => console.log(err));
        const updateData = {...props.jobseekerData}
        updateData["aadharImg"]=url
        props.setJobseekerData(updateData)
        console.log(url)
        console.log(props.jobseekerData)
        
        await axios.post('/api/jobseeker', props.jobseekerData)
        .then((res) => {
            console.log(res.status, res.data);
            navigate('/')
        })
          .catch((error) => {
            console.log(error);
          });
    }

    
    return (
        <div className="shadow p-3 mb-5 bg-white rounded" style={{ alignContent: 'center', marginLeft: '20%', marginRight: '20%', marginTop: '50px', marginBottom: '50px'}}>

            <div style={{ marginLeft: '20px', marginRight: '20px' }}>

                <Form method='POST'>

                    <h5>Service Provider Registration</h5>
                    <br />

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" name='name' onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="gender" onChange={props.handleChange}>
                        <label for="exampleFormControlSelect1">Gender</label>
                        <select class="form-control" id="exampleFormControlSelect1" name='gender' onChange={props.handleChange} >
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contact">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 10 digit Mobile No" name='contact' onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={props.handleChange}/>
                        <br/>
                        <Form.Text className="text-muted">
                            Please use Strong Password contains Number, Symbol, UpperCase, LowerCase.
                        </Form.Text>
                        <Form.Control type="password" placeholder="Re enter your Password" name='cpassword' onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAadhar">
                        <Form.Label>Aadhar No</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 12 digit Aadhar No" name='aadharNum' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAadharScan">
                        <Form.Label>Upload Aadhar</Form.Label>
                        <Form.Control type="file" accept='image/*' onChange={(e)=>setImage(e.target.files[0])}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address Line 1" name='address1' onChange={props.handleChange}/>
                        <br />
                        <Form.Control type="text" placeholder="Enter Address Line 2" name='address2' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter your City" name='city' onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter your State" name='state' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPin">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 6 digit Area Pin Code" name='pincode' onChange={props.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <label for="exampleFormControlSelect1">Country</label>
                        <select class="form-control" id="exampleFormControlSelect1" name='country' onChange={props.handleChange}>
                            <option>Select your Country</option>
                            <option>Afghanistan</option>
                            <option>Bhutan</option>
                            <option>China</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Israel</option>
                            <option>Japan</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Nepal</option>
                            <option>Pakistan</option>
                            <option>Russia</option>
                            <option>Sri Lanka</option>
                            <option>Thailand</option>
                            <option>Turkey</option>
                            <option>Vietnam</option>
                            <option>Other</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicExperties">
                        <label for="exampleFormControlSelect1">Experties</label>
                        <select class="form-control" id="exampleFormControlSelect1" name='expertise' onChange={props.handleChange}>
                            <option>Select your respective Experties</option>
                            <option>Electrician</option>
                            <option>Plumber</option>
                            <option>House Builder</option>
                            <option>Carpenter</option>
                            <option>Machanic</option>
                            <option>Tailor</option>
                            <option>Mobiler & Laptop Repair</option>
                            <option>Others</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicExprience">
                        <label for="exampleFormControlSelect1">Exprience</label>
                        <select class="form-control" id="exampleFormControlSelect1" name='experience' onChange={props.handleChange}>
                            <option>Select your Exprience</option>
                            <option>0-1</option>
                            <option>1-3</option>
                            <option>3-5</option>
                            <option>5-7</option>
                            <option>7-9</option>
                            <option>9-11</option>
                            <option>11-13</option>
                            <option>13-15</option>
                            <option>More than 15years</option>
                        </select>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={SendData}>
                        Submit
                    </Button>

                </Form>

            </div>

        </div>

    );
}

export default ServiceProviderForm;
