import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { toast } from "sonner";

//mengimport gambar logo
import imgCrown from "../assets/images/crown.png";
/* eslint-disable react/prop-types */
const TopNavbar = ({ routes }) => {
    //menggunakan hook useNavigate untuk mengatur navigasi
    const navigate = useNavigate();
    //menggunakan hook useLocation untuk mengambil path
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("user"); //menghapus data user di localstorage
        toast.success("Logout berhasil!");
        setTimeout(() => {
            navigate("/login"); //mengarahkan ke halaman login
        }, 1000);
    };

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary shadow">
            <Container>
                <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <div className="d-flex align-items-center">
                        <div className="ms-0">
                            <p className="mb-0 fs-2 fw-bold">Gabugan 1</p>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/"><strong>Home</strong></Nav.Link>
                        <Nav.Link href="#profile"><strong>Profile</strong></Nav.Link>
                        <Nav.Link href="#wisata"><strong>Wisata</strong></Nav.Link>
                        <Nav.Link href="#lokasi"><strong>Lokasi</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default TopNavbar;
