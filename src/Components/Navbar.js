import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold'>:)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/" active>Home</Nav.Link>
                            <Nav.Link href="/Food">Food</Nav.Link>
                            <Nav.Link href="/Beauty">Beauty</Nav.Link>
                            <Nav.Link href="/Travel">Travel</Nav.Link>
                            <Nav.Link href="/Space">Space</Nav.Link>
                            <Nav.Link href="/Fashion">Fashion</Nav.Link>
                            <Nav.Link href="/Study">Study</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Newsletter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default CollapsibleExample;