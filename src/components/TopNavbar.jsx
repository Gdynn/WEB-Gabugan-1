import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { toast } from "sonner";
import './Components.css'

const TopNavbar = ({ routes }) => {

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <div className="d-flex align-items-center">
                        <div className="ms-0">
                            <p className="mb-0 fs-2 fw-bold"><strong>Gabugan 1</strong></p>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/"><h5 style={{color:"black"}}><strong>Beranda</strong></h5></Nav.Link>
                        <Nav.Link href="/profile"><h5 style={{color:"black"}}><strong>Profil</strong></h5></Nav.Link>
                        <Nav.Link href="/wisata"><h5 style={{color:"black"}}><strong>Wisata</strong></h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default TopNavbar;
