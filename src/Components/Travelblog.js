import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Images
import Coffee from '../img/coffee1.jpg';
import Travel1 from '../img/tr3.jpg';
import Travel2 from '../img/tr1.jpg';
import Travel3 from '../img/tr2.jpg';
import Travel from '../img/travel.jpg';

const Beautyblog = () => {
    return (
        <>
            <Container fluid className='py-5 mt-5'>
                <Container className='rounded'>
                    <Card style={{ width: '100%', height: '500px', backgroundImage: `url(${Travel1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='shadow'>
                        <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-5'>
                            <Card.Title className='col-6'><h1 className=' display-1 fw-bold'>Explore.</h1></Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Container>
            </Container >
            <Container fluid className='pb-5'>
                <Container>
                    <Row className='gap-4 gap-md-0'>
                        <Col md={4}>
                            <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                <Card.Img variant="top" src={Travel2} className='img-fluid rounded h-100' />
                                <Card.ImgOverlay className='d-flex justify-content-center text-light flex-column px-md-3'>
                                    <Card.Title><h3 className='col-7'>Dubai</h3></Card.Title>
                                    <Card.Link href="#" className='text-light mt-3'>Read More...</Card.Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                <Card.Img variant="top" src={Travel} className='img-fluid rounded h-100' />
                                <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                    <Card.Title><h3 className='col-8'>Santorini</h3></Card.Title>
                                    <Card.Link href="#" className='text-light mt-3'>Read More...</Card.Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%', height: '100%' }} className='shadow'>
                                <Card.Img variant="top" src={Travel3} className='img-fluid rounded h-100' />
                                <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                    <Card.Title><h3 className='col-8'>Greece</h3></Card.Title>
                                    <Card.Link href="#" className='text-light mt-3'>Read More...</Card.Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>

    );
}

export default Beautyblog;