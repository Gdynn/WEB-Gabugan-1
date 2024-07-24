import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import DynamicPageTitle from "../components/DynamicPageTitle";
import { Row, Container } from "react-bootstrap";
import './MainLayout.css';

import Gmaps from "../assets/images/Gmaps.png";

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
                        <h1 style={{ fontWeight: "bold" }}>Gabugan 1</h1>
                    </Row>
                    <Row className="mt-3">
                        <h3 style={{ fontWeight: "bold" }}>Songbanyu, Girisubo, Kabupaten Gunung Kidul</h3>
                    </Row>
                    <Row>
                        <h3 style={{ fontWeight: "bold" }}>Daerah Istimewa Yogyakarta</h3>
                    </Row>
                    <Row className="mt-3">
                        <a href="https://maps.app.goo.gl/uv2MWwShEbP7EGnH6?g_st=iw"><img className="gmaps" src={Gmaps} alt="Gmaps" /> https://maps.app.goo.gl/uv2MWwShEbP7EGnH6?g_st=iw</a>
                    </Row>
                    <Row className="col-md-4 d-flex align-items-center mt-5">
                        <p>© KKN 85 Kelompok 73 UAJY 2024</p>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default MainLayout;
