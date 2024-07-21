import { Container, Row, Card } from "react-bootstrap";

// import component
import ImageCarousel from "../components/ImageCarousel";

// import gambar
import Sadeng from "../assets/images/Sadeng.jpg";
import Sekolah from "../assets/images/Sekolah.jpg";
import Pertigaan from "../assets/images/Pertigaan.jpg";
import Balai from "../assets/images/Balai.jpg";

import './Dashboard.css';

const images = [
    {
        img: Sadeng,
        title: "Profil",
    },
    {
        img: Pertigaan,
        title: "Profil",
    },
    {
        img: Sekolah,
        title: "Profil",
    },
];

const ProfilePage = () => {
    return (
        <>
            <div className="carousel-container mt-3">
                <ImageCarousel images={images} />
            </div>
            <Container className="mt-5">
                <Row className="mb-5 justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center"><strong>Padukuhan Gabugan 1</strong></h1>
                </Row>
                <Row>
                    <h4 className="justify-text">
                        Padukuhan Gabugan I terletak di Kelurahan Songbanyu, Kecamatan Girisubo, Kabupaten Gunung Kidul. Di bawah kepemimpinan Triyanto, Padukuhan Gabugan I berkembang dengan semangat gotong royong dan kekeluargaan yang kuat.
                    </h4>
                </Row>
                <Row className="mt-5">
                    <h4 className="justify-text">
                        Sebagai desa pesisir, penduduknya bekerja sebagai nelayan dan petani. Para nelayan gigih mencari nafkah di laut, sementara petani memanfaatkan kesuburan tanah untuk bercocok tanam.
                    </h4>
                </Row>
                <Row className="mt-5">
                    <h4 className="justify-text">
                        Selain keindahan alam yang mempesona, Padukuhan Gabugan I memiliki fasilitas penunjang seperti SDN Gabugan dan Balai Desa Padukuhan Gabugan sebagai pusat kegiatan sosial dan pemerintahan.
                    </h4>
                </Row>
                <Row className="mt-5">
                    <h4 className="justify-text">
                        Padukuhan Gabugan I adalah contoh desa yang mandiri dan berdaya, dengan semangat gotong royong dan kekeluargaan yang kuat. Tempat ini cocok bagi mereka yang mencari ketenangan dan kehangatan keramahan pedesaan.
                    </h4>
                </Row>
                <Row className="mt-5 justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center" style={{ fontWeight: "bolder" }}>3</h1>
                </Row>
                <Row className="justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center" style={{ fontWeight: "bolder" }}>Rukun Tetangga</h1>
                </Row>
                <Row className="mt-5 justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center" style={{ fontWeight: "bolder" }}>1</h1>
                </Row>
                <Row className="justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center" style={{ fontWeight: "bolder" }}>Rukun Warga</h1>
                </Row>
                <Row className="mt-5 justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center" style={{ fontWeight: "bolder" }}>?</h1>
                </Row>
                <Row className="justify-content-center" style={{ textAlign: "center" }}>
                    <h1 className="justify-content-center" style={{ fontWeight: "bolder" }}>Kartu Keluarga</h1>
                </Row>
                <Row className="mt-5">
                    <Container>
                        <Card>
                            <Card.Img variant="top" src={Sekolah} className="img-fluid mx-auto rounded shadow profil-img" role="img" aria-label="Gambar sadeng" />
                        </Card>
                    </Container>
                </Row>
                <Row className="mt-5">
                    <Container>
                        <Card>
                            <Card.Img variant="top" src={Balai} className="img-fluid mx-auto rounded shadow profil-img" role="img" aria-label="Gambar sadeng" />
                        </Card>
                    </Container>
                </Row>
            </Container>
        </>
    );
};

export default ProfilePage;
