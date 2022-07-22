import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home">Lifestyle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features" active>Home</Nav.Link>
                            <Nav.Link href="#features">Food</Nav.Link>
                            <Nav.Link href="#features">Beauty</Nav.Link>
                            <Nav.Link href="#pricing">Travel</Nav.Link>
                            <Nav.Link href="#pricing">Space</Nav.Link>
                            <Nav.Link href="#pricing">Fashion</Nav.Link>
                            <Nav.Link href="#pricing">Study</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default CollapsibleExample;