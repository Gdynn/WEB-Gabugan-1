import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import DynamicPageTitle from "../components/DynamicPageTitle";
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './MainLayout.css';

const routes = [
    {
        path: "/",
        name: "Beranda"
    },
    {
        path: "/profile",
        name: "Profil",
    },
    {
        path: "/wisata",
        name: "Wisata",
    },
];

/* eslint-disable react/prop-types */
const MainLayout = ({ children }) => {
    return (
        <div>
            <DynamicPageTitle />
            <TopNavbar routes={routes} />
            {children ? children : <Outlet />}
            <footer className="mt-4 d-flex flex-column align-items-start border-top footer-custom">
                <Container>
                    <Row className="mt-3">
                        <h1 style={{ fontWeight: "bold" }}>Gabugan</h1>
                    </Row>
                    <Row className="mt-3">
                        <h3 style={{ fontWeight: "bold" }}>Songbanyu, Girisubo, Kabupaten Gunung Kidul</h3>
                    </Row>
                    <Row>
                        <h3 style={{ fontWeight: "bold" }}>Daerah Istimewa Yogyakarta</h3>
                    </Row>
                    <Row className="mt-3">
                        <a href="https://maps.app.goo.gl/uv2MWwShEbP7EGnH6?g_st=iw"><FontAwesomeIcon icon={faLocationDot} /> https://maps.app.goo.gl/uv2MWwShEbP7EGnH6?g_st=iw</a>
                    </Row>
                    <Row className="col-md-4 d-flex align-items-center mt-5">
                        {/* <span className="mb-3 mb-md- text-body-secondary" style={{color:"white"}}>© KKN 73 UAJY 2024</span> */}
                        <p>© KKN 73 UAJY 2024</p>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default MainLayout;
