import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { Col, InputGroup } from 'react-bootstrap';


function ServiceProviderForm(props) {
    // const [url, setUrl] = useState();
    // const [aadhUrl, setAadhUrl] = useState();
    // const [samUrl, setSamUrl] = useState();
    let url = ''
    const [profileImg, setProfileImg] = useState("");
    const [aadharImg, setAadharImg] = useState();
    const [workSample, setWorkSample] = useState("")
    
    const [expertise, setExpertise] = useState([])
 

    useEffect(() => {
        console.log(8)
        const fetchExpertise = async () => {
        const response = await axios.get('/api/expertise');
        //console.log(response);
        setExpertise(response.data);
        };
        fetchExpertise();
    }, [])

    const navigate = useNavigate();
    const test = (e) => {
        console.log("working");
    }

        
    const uploadAadhar = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", aadharImg)
        
        formData.append("upload_preset", "city-comforts");
        formData.append("cloud_name", "dd1sbx4hb");
        console.log(formData);
        
        axios.post("https://api.cloudinary.com/v1_1/dd1sbx4hb/image/upload", formData)
            .then(res => {
                url = (res.data.secure_url)
                console.log(url)
                const newData = {...props.jobseekerData}
                console.log(url)
                newData["aadharImg"]=url;
                props.setJobseekerData(newData);
                console.log(newData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const uploadProfile = async (fieldName) => {
        const formData = new FormData();
        formData.append("file", profileImg)
        
        formData.append("upload_preset", "city-comforts");
        formData.append("cloud_name", "dd1sbx4hb");
        console.log(formData);
        await axios.post("https://api.cloudinary.com/v1_1/dd1sbx4hb/image/upload", formData)
            .then(res => {
                url = (res.data.secure_url)
                const newData = {...props.jobseekerData}
                newData[fieldName]=url;
                props.setJobseekerData(newData);
                console.log(newData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const uploadSample = () => {
        const formData = new FormData();
        formData.append("file", workSample)
        
        formData.append("upload_preset", "city-comforts");
        formData.append("cloud_name", "dd1sbx4hb");
        console.log(formData);
        axios.post("https://api.cloudinary.com/v1_1/dd1sbx4hb/image/upload", formData)
            .then(res => {
                url = (res.data.secure_url)
                const newData = {...props.jobseekerData}
                newData["workSample"]=url;
                props.setJobseekerData(newData);
                console.log(newData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const SendData = async (e) => {
        e.preventDefault();
        await axios.post('/api/jobseeker', props.jobseekerData)
            .then((res) => {
                console.log(res.status, res.data);
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);

    const findCountryCode = () => {
        const countries = Country.getAllCountries();
        countries.map(country => {
            if(country.name === props.jobseekerData.country){
                setSelectedCountry(country.isoCode)
            }
        })
    }

    const findStateCode = () => {
        const states = State?.getStatesOfCountry(selectedCountry)
        states.map(state => {
            if(state.name === props.jobseekerData.state){
                setSelectedState(state.isoCode)
            }
        })
    }


    return (
        <div className="shadow p-3 mb-5 bg-white rounded" style={{ alignContent: 'center', marginLeft: '20%', marginRight: '20%', marginTop: '50px', marginBottom: '50px' }}>

            <div style={{ marginLeft: '20px', marginRight: '20px' }}>

                <Form method='POST'>

                    <h5>Service Provider Registration</h5>
                    <br />

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" name='name' onChange={props.handleChange} />
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
                        <Form.Control type="number" placeholder="Enter your 10 digit Mobile No" name='contact' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' onChange={props.handleChange} />
                        <br />
                        <Form.Text className="text-muted">
                            Please use Strong Password contains Number, Symbol, UpperCase, LowerCase.
                        </Form.Text>
                        <Form.Control type="password" placeholder="Re enter your Password" name='cpassword' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAadhar">
                        <Form.Label>Aadhar No</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 12 digit Aadhar No" name='aadharNum' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAadharScan">
                        <Form.Label>Upload Aadhar</Form.Label>
                        <InputGroup>
                        <Form.Control type="file" accept='image/*' onChange={(e) => setAadharImg(e.target.files[0])} />
                        <Button onClick={uploadAadhar}>Upload</Button>
                        </InputGroup>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address Line 1" name='address1' onChange={props.handleChange} />
                        <br />
                        <Form.Control type="text" placeholder="Enter Address Line 2" name='address2' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <label for="exampleFormControlSelect1">Country</label>
                        
                        <select class="form-control" id="exampleFormControlSelect1" name='country' onChange={props.handleChange}>
                            <option>Select Country</option>
                            {
                                Country.getAllCountries().map(country => {
                                    return (
                                        <option>{country.name}</option>
                                    )
                                })
                            }
                        </select>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicState" onClick={findCountryCode}>
                        <label>State</label>
                        
                        <select class="form-control" id="exampleFormControlSelect1" name='state' onChange={props.handleChange}>
                            <option>Select State</option>
                            {
                                State?.getStatesOfCountry(selectedCountry).map(state => {
                                    return (
                                        <option>{state.name}</option>
                                    )
                                })
                            }
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity" onClick={findStateCode}>
                        <label>City</label>
                        
                        <select class="form-control" id="exampleFormControlSelect1" name='city' onChange={props.handleChange}>
                            <option>Select City</option>
                            {
                                City.getCitiesOfState(selectedCountry, selectedState).map(city => {
                                    return (
                                        <option>{city.name}</option>
                                    )
                                })
                            }
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPin">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 6 digit Area Pin Code" name='pincode' onChange={props.handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicExperties">
                        <label for="exampleFormControlSelect1">Experties</label>
                        <select class="form-control" id="exampleFormControlSelect1" name='expertise' onChange={props.handleChange}>
                            <option>Select your respective Experties</option>
                            {
                                expertise.map(exp => {
                                    return (
                                        <option>{exp.expertise}</option>
                                    )
                                })
                            }
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
                    <Form.Group className="mb-3" controlId="formBasicAadharScan">
                        <Form.Label>Upload Profile Photo</Form.Label>
                        <InputGroup>
                        <Form.Control type="file" accept='image/*' onChange={(e) => setProfileImg(e.target.files[0])} />
                        <Button onClick={() => uploadProfile("profileImg")}>Upload</Button>
                        </InputGroup>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAadharScan">
                        <Form.Label>Upload Sample of previous work</Form.Label>
                        <InputGroup>
                        <Form.Control type="file" accept='image/*' onChange={(e) => setWorkSample(e.target.files[0])} />
                        <Button onClick={uploadSample}>Upload</Button>
                        </InputGroup>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Describe yourself</Form.Label>
                        <Form.Control as='textarea' rows={5} name='description' onChange={props.handleChange} />
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
