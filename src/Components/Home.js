import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Coffee from '../img/coffee1.jpg';
import Architecture from '../img/architecture.jpg';
import Beauty from '../img/beaut.jpg';
import Travel from '../img/travel.jpg';
import Study from '../img/study.jpg';
import Fashion from '../img/fashion.jpg';

function AutoLayoutExample() {
    return (
        <>
            <Container fluid className='pt-5'>
                <Container className='my-5 rounded'>
                    <div className="header col-md-4 mb-5">
                        <h3>Lifestyle</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, doloribus!</p>
                    </div>
                    <Row className='gap-4 gap-md-0'>
                        <Col md={6}>
                            <Card style={{ width: '100%' }} className='shadow'>
                                <Card.Img variant="top" src={Coffee} className='img-fluid rounded' />
                                <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-5'>
                                    <Card.Subtitle className="mb-2">Food</Card.Subtitle>
                                    <Card.Title className='col-6'><h3>Wake up to the smell of coffee.</h3></Card.Title>
                                    <Card.Link href="#" className='text-light fs-5 mt-md-5'>Card Link</Card.Link>
                                </Card.ImgOverlay>
                            </Card>
                            <Row className='justify-content-between mt-4 gap-3 gap-md-0'>
                                <Col md={6}>
                                    <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                        <Card.Img variant="top" src={Architecture} className='shadow img-fluid rounded h-100' />
                                        <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                            <Card.Subtitle className="mb-2">Space</Card.Subtitle>
                                            <Card.Title><h3 className='col-7'>Lorem, ipsum dolor.</h3></Card.Title>
                                            <Card.Link href="#" className='text-light mt-3'>Card Link</Card.Link>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                        <Card.Img variant="top" src={Fashion} className='shadow img-fluid rounded h-100' />
                                        <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                            <Card.Subtitle className="mb-2">Space</Card.Subtitle>
                                            <Card.Title><h3 className='col-7'>Lorem, ipsum dolor.</h3></Card.Title>
                                            <Card.Link href="#" className='text-light mt-3'>Card Link</Card.Link>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6}>
                            <Row className='justify-content-between mb-4 gap-3 gap-md-0'>
                                <Col md={6}>
                                    <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                        <Card.Img variant="top" src={Beauty} className='shadow img-fluid rounded h-100' />
                                        <Card.ImgOverlay className='d-flex justify-content-center flex-column text-success px-md-3'>
                                            <Card.Subtitle className="mb-2">Beauty</Card.Subtitle>
                                            <Card.Title><h3 className='col-7'>Get your facials.</h3></Card.Title>
                                            <Card.Link href="#" className='text-success mt-3'>Card Link</Card.Link>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                        <Card.Img variant="top" src={Travel} className='shadow img-fluid rounded h-100' />
                                        <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                            <Card.Subtitle className="mb-2">Travel</Card.Subtitle>
                                            <Card.Title><h3 className='col-7'>Explore the world.</h3></Card.Title>
                                            <Card.Link href="#" className='text-light mt-3'>Card Link</Card.Link>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>

                            </Row>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={Study} className='img-fluid rounded shadow' />
                                <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-5'>
                                    <Card.Subtitle className="mb-2">Study</Card.Subtitle>
                                    <Card.Title className='col-6'><h3>Lorem ipsum dolor sit amet.</h3></Card.Title>
                                    <Card.Link href="#" className='text-light fs-5 mt-md-5'>Card Link</Card.Link>
                                </Card.ImgOverlay>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default AutoLayoutExample;