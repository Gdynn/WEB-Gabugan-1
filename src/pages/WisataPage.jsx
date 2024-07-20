import { Container, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// import component
import ImageCarousel from "../components/ImageCarousel";

// import gambar
import imgHotell from "../assets/images/hotel1.jpg";
import imgHotel2 from "../assets/images/hotel2.jpg";
import imgHotel3 from "../assets/images/hotel3.jpg";

import Sadeng from "../assets/images/Sadeng.jpg";

import './Dashboard.css';

const images = [
    {
        img: imgHotell,
        title: "Wisata",
    },
    {
        img: imgHotel2,
        title: "Wisata",
    },
    {
        img: imgHotel3,
        title: "Wisata",
    },
];

const WisataPage = () => {
    return (
        <>
            <div className="carousel-container mt-3">
                <ImageCarousel images={images} />
            </div>
            <Container className="mt-5">
                <Row>
                    <Container className="content-container">
                        <Row>
                            <Col md={6}>
                                <img src={Sadeng} className="img-fluid mx-auto rounded shadow wisata-img" role="img" aria-label="Gambar sadeng" />
                            </Col>
                            <Col md={6} className="flex-column">
                                <h2 className="fw-normal">
                                    <strong>Pantai Sadeng</strong>
                                </h2>
                                <p className="lead justify-text">
                                    Pantai Sadeng di Gunung Kidul tak hanya menawarkan
                                    panorama laut yang memesona, tetapi juga menyimpan
                                    jejak sejarah panjang. Dahulu, Sungai Bengawan Solo
                                    mengalir tenang hingga bermuara di pantai ini, menjadi
                                    saksi bisu kehidupan masyarakat pesisir yang bergantung pada laut.
                                </p>
                                <Button className="btn-primary btn-play mt-auto"><FontAwesomeIcon style={{color:"white"}} icon={faPlay} /> Tonton Video</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="content-container mt-3">
                        <Row>
                            <Col md={6}>
                                <img src={Sadeng} className="img-fluid mx-auto rounded shadow wisata-img" role="img" aria-label="Gambar sadeng" />
                            </Col>
                            <Col md={6} className="flex-column">
                                <h2 className="fw-normal">
                                    <strong>Pantai Sadeng</strong>
                                </h2>
                                <p className="lead justify-text">
                                    Pantai Sadeng di Gunung Kidul tak hanya menawarkan
                                    panorama laut yang memesona, tetapi juga menyimpan
                                    jejak sejarah panjang. Dahulu, Sungai Bengawan Solo
                                    mengalir tenang hingga bermuara di pantai ini, menjadi
                                    saksi bisu kehidupan masyarakat pesisir yang bergantung pada laut.
                                </p>
                                <Button className="btn-primary btn-play mt-auto"><FontAwesomeIcon style={{color:"white"}} icon={faPlay} /> Tonton Video</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    );
};

export default WisataPage;
