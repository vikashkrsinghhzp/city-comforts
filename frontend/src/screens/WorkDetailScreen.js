import React from 'react'
import { Card, Image, Col, Form, ListGroup, Row, Button } from 'react-bootstrap'
import { useNavigate, Link, useParams } from 'react-router-dom'

const WorkDetailScreen = () => {
    let name = 'saurav'
    let price = 25
    let description = 'slkdjijiejfl djkjjd jksjkjeioj kjdij jijd s kjiejf'
    let isAvailabe = false
    let reviews = ['jskdjfiejiejfj', 'skdfi djij fijief jdij fjijef j idj', 'sdkfijf djijef ijdjfjei fdjieje', 'skdj jdij', 'good work']

    const addToCart = () => (console.log('adding to cart'))
    return (
        <div className='m-5'>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row className='m-5'>
                <Col md={6}>
                    
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Image src='img/download.png' alt={name} fluid />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Reviews</h3>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                            {
                                reviews.map(review => {
                                    return (
                                        <Row>{review}</Row>
                                    )
                                })
                            }
                        </ListGroup.Item> */}
                        
                    </ListGroup>
                    <ListGroup>
                            {
                                reviews.map(review => {
                                    return (
                                        <ListGroup.Item>{review}</ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${price}
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            Description: {description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {isAvailabe ? 'Availabe' : 'Currently unavailable'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Rating: 3
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                onClick={addToCart}
                                className='btn-block'
                                type='button'
                                disabled={!isAvailabe}>
                                Hire me
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                

            </Row>
        </div>
    )
}

export default WorkDetailScreen
