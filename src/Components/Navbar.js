import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function CollapsibleExample() {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand to="#home" className='fw-bold'>:)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto col-md-6 justify-content-evenly">
                            <Link to="/" active className='text-secondary'>Home</Link>
                            <Link to="/Travel" className='text-secondary'>Travel</Link>
                            <Link to="/Beauty" className='text-secondary'>Beauty</Link>
                            <Link to="/Food" className='text-secondary'>Food</Link>
                            <Link to="/Space" className='text-secondary'>Space</Link>
                            <Link to="/Fashion" className='text-secondary'>Fashion</Link>
                            <Link to="/Study" className='text-secondary'>Study</Link>
                        </Nav>
                        <Nav>
                            <Link to="#deets" className='text-secondary'>Newsletter</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default CollapsibleExample;