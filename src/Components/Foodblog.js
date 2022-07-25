import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Coffee from '../img/coffee1.jpg';

const Beautyblog = () => {
    return (
        <Container fluid className='py-5 mt-5'>
            <Container className='rounded'>
                <Card style={{ width: '100%', height: '300px', backgroundImage: `url(${Coffee})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='shadow'>
                    <Card.ImgOverlay className='d-flex justify-content-center flex-column text-light px-md-5'>
                        <Card.Subtitle className="mb-2 text-warning">Food</Card.Subtitle>
                        <Card.Title className='col-6'><h3>Wake up to the smell of coffee.</h3></Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </Container >
    );
}

export default Beautyblog;