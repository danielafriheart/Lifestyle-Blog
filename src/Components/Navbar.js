import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function CollapsibleExample() {
    window.addEventListener('scroll', function () {
        let header = document.querySelector('nav');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
    });
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand to="#home" className='fw-bold'>:)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto col-md-6 justify-content-evenly">
                            <Link to="/" active className='text-light activegit '>Home</Link>
                            <Link to="/Travel" className='text-light'>Travel</Link>
                            <Link to="/Beauty" className='text-light'>Beauty</Link>
                            <Link to="/Food" className='text-light'>Food</Link>
                            <Link to="/Space" className='text-light'>Space</Link>
                            <Link to="/Fashion" className='text-light'>Fashion</Link>
                            <Link to="/Study" className='text-light'>Study</Link>
                        </Nav>
                        <Nav>
                            <Link to="#deets" className='text-light'>Newsletter</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default CollapsibleExample;