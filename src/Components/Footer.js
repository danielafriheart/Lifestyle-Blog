import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    return (
        <Container fluid className='pt-5 border-top border-1 bg-light'>
            <Container>
                <Row className='gap-md-0 gap-4'>
                    <Col md={6} className='d-flex gap-5'>
                        <h2 className='fw-bold display-5'>:)</h2>
                        <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sed sit voluptatum. Quis quos blanditiis eaque dolore obcaecati fugit in.</p>
                    </Col>
                    <Col>
                        <ul>
                            <li>Home</li>
                            <li>Food</li>
                            <li>Beauty</li>
                            <li>Travel</li>

                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Space</li>
                            <li>Fashion</li>
                            <li>Study</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            Contact
                            <li>Esuoladaniel002@gmail.com</li>
                        </ul>
                    </Col>

                </Row>
                <div className="foot text-end text-secondary mt-2 border-top pt-2">
                    <p>Designed by <a href="/">Esuola Daniel</a></p>
                </div>
            </Container>
        </Container>
    );
}

export default Footer;