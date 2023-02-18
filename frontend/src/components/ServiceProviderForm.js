import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ServiceProviderForm() {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded" style={{ alignContent: 'center', marginLeft: '20%', marginRight: '20%', marginTop: '50px', marginBottom: '50px'}}>

            <div style={{ marginLeft: '20px', marginRight: '20px' }}>

                <Form>

                    <h5>Service Provider Registration</h5>
                    <br />

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <label for="exampleFormControlSelect1">Gender</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 10 digit Mobile No" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <br/>
                        <Form.Text className="text-muted">
                            Please use Strong Password contains Number, Symbol, UpperCase, LowerCase.
                        </Form.Text>
                        <Form.Control type="password" placeholder="Re enter your Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAadhar">
                        <Form.Label>Aadhar No</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 12 digit Aadhar No" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAadharScan">
                        <Form.Label>Upload Aadhar</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address Line 1" />
                        <br />
                        <Form.Control type="text" placeholder="Enter Address Line 2" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter your City" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter your State" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPin">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 6 digit Area Pin Code" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <label for="exampleFormControlSelect1">Country</label>
                        <select class="form-control" id="exampleFormControlSelect1">
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
                        <select class="form-control" id="exampleFormControlSelect1">
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
                        <select class="form-control" id="exampleFormControlSelect1">
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

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>

            </div>

        </div>

    );
}

export default ServiceProviderForm;
