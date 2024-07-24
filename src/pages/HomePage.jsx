import { Container, Row, Col, Card } from "react-bootstrap";

// import component
import ImageCarouselHome from "../components/ImageCarouselHome";

// import gambar
import Voli from "../assets/images/Voli.jpg";
import Klonengan from "../assets/images/Klenengan.jpg";
import Klonengan2 from "../assets/images/Klenengan2.jpg";
import Wayang from "../assets/images/Wayang.jpg";
import KerjaBakti from "../assets/images/KerjaBakti.jpg";
import Sadeng from "../assets/images/Sadeng.jpg";
import Sekolah from "../assets/images/Sekolah.jpg";
import Pertigaan from "../assets/images/Pertigaan.jpg";

import './Dashboard.css'

// gambar yang akan ditampilkan di carousel
const images = [
    {
        img: Sadeng,
        title: "Padukuhan Gabugan 1",
        description: "Kecamatan Girisubo, Kabupaten Gunung Kidul"
    },
    {
        img: Pertigaan,
        title: "Padukuhan Gabugan 1",
        description: "Kecamatan Girisubo, Kabupaten Gunung Kidul"
    },
    {
        img: Sekolah,
        title: "Padukuhan Gabugan 1",
        description: "Kecamatan Girisubo, Kabupaten Gunung Kidul"
    },
];

const HomePage = () => {
    return (
        <>
            <div className="carousel-container mt-3">
                <ImageCarouselHome images={images} />
            </div>
            <Container className="mt-5">
                <Row className="mb-4 justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center"><strong>Kegiatan</strong></h1>
                </Row>
                <Row className="kegiatan d-flex justify-content-between">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={Voli} className="img-fluid mx-auto custom-img"/>
                            <Card.Body>
                                <Card.Title><strong>Main Voli</strong></Card.Title>
                                <Card.Text>
                                    Kegiatan bermain voli di sore hari.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="hp-content">
                            <Card.Img variant="top" src={Klonengan} className="img-fluid mx-auto custom-img "/>
                            <Card.Body>
                                <Card.Title><strong>Klonengan</strong></Card.Title>
                                <Card.Text>
                                    Latihan klonengan rutin setiap malam rabu.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="hp-content">
                            <Card.Img variant="top" src={KerjaBakti} className="img-fluid custom-img "/>
                            <Card.Body>
                                <Card.Title><strong>Dusun Bersih</strong></Card.Title>
                                <Card.Text>
                                    Kegiatan kerja bakti yang dilakukan satu bulan sekali.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <h1 className="justify-content-center"><strong>Wisata</strong></h1>
                </Row>
                <hr className="mt-2 mb-5" />
                <Row>
                    <Col md={5}>
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
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <img src={Sadeng} className="img-fluid mx-auto rounded shadow custom-img" role="img" aria-label="Gambar featurette1" />
                    </Col>
                </Row>
                <hr className="mt-5 mb-5" />
                <Row>
                    <Col md={5} className="order-md-2">
                        <h2 className="fw-normal">
                            <strong>Wayangan</strong>
                        </h2>
                        <p className="lead justify-text">
                            Di Desa Gabugan, wayang bukan sekadar pertunjukan 
                            seni, tetapi sebuah perjalanan spiritual yang menceritakan 
                            kisah kehidupan manusia dari lahir hingga kembali kepada 
                            Sang Pencipta. Pertunjukan ini biasanya diadakan pada malam 
                            bulan Suro, momen suci yang penuh makna.
                        </p> 
                    </Col>
                    <Col md={7} className="order-md-1">
                        <img src={Wayang} className="img-fluid mx-auto rounded shadow custom-img" role="img" aria-label="Gambar featurette2" />
                    </Col>
                </Row>
                <hr className="mt-5 mb-5" />
                <Row>
                    <Col md={5}>
                        <h2 className="fw-normal">
                            <strong>Klonengan</strong>
                        </h2>
                        <p className="lead justify-text">
                        Klenengan di Desa Gabugan I, Gunung Kidul, tak hanya 
                        menghadirkan hiburan, tetapi juga warisan budaya yang 
                        sarat makna. Alunan merdu gamelan, harmonisasi suara, 
                        dan pertunjukan yang penuh makna menjadi daya tarik bagi 
                        para pecintanya.
                        </p>
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={5}>
                        <img src={Klonengan2} className="img-fluid mx-auto rounded shadow custom-img" role="img" aria-label="Gambar featurette1" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
