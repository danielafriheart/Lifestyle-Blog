import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Images
// import Coffee from '../img/coffee1.jpg';
// import Travel1 from '../img/tr3.jpg';
import Travel2 from '../img/tr1.jpg';
import Travel3 from '../img/tr2.jpg';
import Travel4 from '../img/tr4.jpg';
import Travel from '../img/travel.jpg';

const Beautyblog = () => {
    return (
        <>
            <Container fluid className='py-5 mt-5'>
                <Container className='rounded'>
                    {/* <div className="header col-md-4 mb-5">
                        <h3 className='fw-bold display-1 text-deco'>Travel.</h3>
                        <p className='text-secondary'>Explore the world... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eligendi!</p>
                    </div> */}
                    <Card style={{ width: '100%', height: '500px', backgroundImage: `url(${Travel4})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }} className='shadow grow'>
                        <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-5'>
                            <Card.Title className='col-6'><h1 className=' display-1 fw-bold'>Explore.</h1></Card.Title>
                            <p className="lead col-md-4">Travel the world <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, eligendi!</p>
                        </Card.ImgOverlay>
                    </Card>
                </Container>
            </Container >
          

            <Container fluid>
                <Container>
                    <Row className='justify-content-between'>
                        <Col md={6}>
                        <i className='fs-3'>From the firehose</i>
                        <div className="content my-3 py-3 border-top">
                            <h1>Sample blog post</h1>
                            <div className="text-small lh-lg">January 1, 2021 by Mark</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi incidunt mollitia cupiditate dolorem illum! Dolor tenetur veritatis facere cumque!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi incidunt mollitia cupiditate dolorem illum! Dolor tenetur veritatis facere cumque!</p>
                        </div>
                        <div className="content my-3 border-top py-3">
                            <h1>Blockquotes</h1>
                            <div className="text-small lh-lg">January 1, 2021 by Mark</div>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        </div>
                        <div className="content my-3 border-top py-3">
                            <h1>Another Blog post</h1>
                            <div className="text-small lh-lg">January 1, 2021 by Mark</div>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        </div>
                        </Col>
                        <Col md={5} className='sticky-top'>
                            <div className="header px-md-5 py-md-5 py-3 px-3 bg-light mb-5 ">
                                 <i className="fs-3">About</i>
                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut enim temporibus consequuntur quod repudiandae suscipit illo rem beatae ad. Ducimus!</p>
                            </div>
                            <i className="fs-3 px-md-5 px-0">Archives</i>
                            <ul className='px-0 px-md-5'>
                                <li><a href="/">January 2022</a></li>
                                <li><a href="/">February 2022</a></li>
                                <li><a href="/">March 2022</a></li>
                                <li><a href="/">April 2022</a></li>
                                <li><a href="/">May 2022</a></li>
                                <li><a href="/">June 2022</a></li>
                                <li><a href="/">July 2022</a></li>
                                <li><a href="/">August 2022</a></li>
                                <li><a href="/">September 2022</a></li>
                                <li><a href="/">October 2022</a></li>
                                <li><a href="/">November 2022</a></li>
                                <li><a href="/">December 2022</a></li>
                             
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='pb-5'>
                <Container>
                    <Row className='gap-4 gap-md-0'>
                        <Col md={4}>
                            <Card style={{ width: '100%', height: '100%' }} className='shadow grow'>
                                <Card.Img variant="top" src={Travel2} className='img-fluid rounded h-100' />
                                <Card.ImgOverlay className='d-flex justify-content-center text-light flex-column px-md-3'>
                                    <Card.Title><h3 className='col-7'>Dubai</h3></Card.Title>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <Card.Link href="/" className='text-light mt-3'>Read More...</Card.Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%', height: '100%' }} className='shadow grow'>
                                <Card.Img variant="top" src={Travel} className='img-fluid rounded h-100' />
                                <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                    <Card.Title><h3 className='col-8'>Santorini</h3></Card.Title>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <Card.Link href="/" className='text-light mt-3'>Read More...</Card.Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%', height: '100%' }} className='shadow grow'>
                                <Card.Img variant="top" src={Travel3} className='img-fluid rounded h-100' />
                                <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-3'>
                                    <Card.Title><h3 className='col-8'>Greece</h3></Card.Title>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <Card.Link href="/" className='text-light mt-3'>Read More...</Card.Link>
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