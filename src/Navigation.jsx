import 'bootstrap-icons/font/bootstrap-icons.css';

import {Navbar, Nav, Form} from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar bg="primary" expand="sm" variant="dark" fixed="top" className="navbar-padding">
            <Navbar.Brand href="index.html">
            <i className="bi bi-camera2"></i> Film Library
            </Navbar.Brand>
            <Form className="my-2 my-lg-0 mx-auto d-sm-block" action="#" role="search" aria-label="Quick search">
                <Form.Control className="mr-sm-2" type="search" placeholder="Search" aria-label="Search query" />
                <Form.Text className='text-muted'>Non fa nulla</Form.Text>
            </Form>
            <Nav className="ml-md-auto">
            <Nav.Item>
                <Nav.Link href="#">
                <i className="bi bi-person-circle icon-size"/>
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export {Navigation};