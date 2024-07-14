import { Container, Row, Col, Card } from "react-bootstrap";

// import component
import ImageCarousel from "../components/ImageCarousel";

// import gambar
import imgHotell from "../assets/images/hotel1.jpg";
import imgHotel2 from "../assets/images/hotel2.jpg";
import imgHotel3 from "../assets/images/hotel3.jpg";
import imgFeaturettel from "../assets/images/featurette-1.jpeg";
import imgFeaturette2 from "../assets/images/featurette-2.jpeg";

import './Dashboard.css'

// gambar yang akan ditampilkan di carousel
const images = [
    {
        img: imgHotell,
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        img: imgHotel2,
        title: "Second slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: imgHotel3,
        title: "Third slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
];

const HomePage = () => {
    return (
        <>
            <ImageCarousel images={images} />
            <Container className="mt-5">
                <Row className="mb-4 justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center"><strong>Kegiatan</strong></h1>
                </Row>
                <Row className="kegiatan d-flex justify-content-between">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={imgFeaturettel} className="img-fluid mx-auto custom-img"/>
                            <Card.Body>
                                <Card.Title><strong>Main Voli</strong></Card.Title>
                                <Card.Text>
                                    Main voli tiap sore.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={imgFeaturette2} className="img-fluid mx-auto custom-img"/>
                            <Card.Body>
                                <Card.Title><strong>Latihan Klonengan</strong></Card.Title>
                                <Card.Text>
                                    Latihan klonengan rutin setiap malam rabu.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={imgFeaturettel} className="img-fluid custom-img"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr className="mt-5 mb-5" />
                <Row>
                    <Col md={7}>
                        <h2 className="fw-normal">
                            Main voli.
                        </h2>
                        <p className="lead">
                            Kegiatan voli setiap sore hari.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img src={imgFeaturettel} className="img-fluid mx-auto rounded shadow custom-img" role="img" aria-label="Gambar featurette1" />
                    </Col>
                </Row>
                <hr className="mt-5 mb-5" />
                <Row>
                    <Col md={7} className="order-md-2">
                        <h2 className="fw-normal">
                            <strong>Latihan Klonengan.</strong>
                        </h2>
                        <p className="lead">
                            Kegiatan rutin pelatihan klonengan setiap malam rabu.
                        </p> 
                    </Col>
                    <Col md={5} className="order-md-1">
                        <img src={imgFeaturette2} className="img-fluid mx-auto rounded shadow custom-img" role="img" aria-label="Gambar featurette2" />
                    </Col>
                </Row>
                <hr className="mt-5 mb-5" />
                <Row>
                    <Col md={7}>
                        <h2 className="fw-normal">
                            <strong>Video Kegiatan</strong>
                        </h2>
                        <p className="lead">
                            Berikut adalah video kegiatan kami.
                        </p>
                    </Col>
                    <Col md={5}>
                        <Card>
                            <Card.Img variant="top" src="https://img.youtube.com/vi/EhGI1cfOLwc/hqdefault.jpg" className="img-fluid mx-auto custom-img"/>
                            <Card.Body>
                                <Card.Title><strong>Video Kegiatan</strong></Card.Title>
                                <Card.Text>
                                    <a href="https://youtu.be/EhGI1cfOLwc?si=-GsfR3iGFCLX9FC4" target="_blank" rel="noopener noreferrer">Tonton Video</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
