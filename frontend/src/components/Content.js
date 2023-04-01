import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';





export default function Content() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">

      <div style={{ width: '70%', marginLeft: '30px', marginTop: '50px', marginBottom: '30px', float: 'left' }}>

        <h3 style={{ marginLeft: '20px' }}>About</h3>

        <p className="shadow p-3 mb-5 bg-white rounded" style={{ marginLeft: '20px', marginRight: '20px' }}>
          The aim of <b>City Comforts </b> is to provide a platform for users
          to interact with a diverse range of service professionals such as
          plumbers, carpenters, electricians and other housekeeping
          services, in order to offer innovative, high-quality and cost-effective services.
          <br />
          <br />
          The application will act as a
          mediator between the clients and the professionals of their
          respective fields, providing convenience and choice to the customers.
          The aim is to maintain a commitment to ethical and socially responsible
          business practices while improving accessibility to these essential services.
        </p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="img/download.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="img/download.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="img/download.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div style={{ width: '30%', marginLeft: '30px', float: 'right', marginTop: '20px', marginBottom: '40px' }}>

        <h4>Founder</h4>

        <ul>
          <li>Vikash Singh <br /> ( Cyber Security Specialist )</li>
          <li>Saurav Kumar <br /> ( Machine Learning Specialist )</li>
          <li>Deekashant Thakur <br /> ( Data Science Specialist )</li>
        </ul>
      </div>
    </div>
  )
}
