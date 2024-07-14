import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalKamar from '../components/ModalKamar';
import './Dashboard.css'

const DashboardPage = () => {
    //menggunakan hook useNavigate untuk mengatur navigasi 
    const navigate = useNavigate();
    //mengambil data user dari localstorage
    const user = JSON.parse(localStorage.getItem("user"));
    //menghandle jika user belum login
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            navigate("/login");
        }
    }, [navigate]);

    //mengubah format tanggal
    const formatDate = (date) => {
        const options = {
            weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric",
        };
        return new Date(date).toLocaleDateString("id-ID", options);
    };

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [kamars, setKamars] = useState([]);

    const handleSaveKamar = (newKamar) => {
        if (selectedKamar) {
          const updatedKamars = kamars.map((kamar, index) =>
            index === kamars.indexOf(selectedKamar) ? newKamar : kamar
          );
          setKamars(updatedKamars);
        } else {
          setKamars([...kamars, newKamar]);
        }
      
        setSelectedKamar(null); 
        handleCloseModal();
      };

    const [selectedKamar, setSelectedKamar] = useState(null);

    const handleEditKamar = (index) => {
        const kamarToEdit = kamars[index];
        setSelectedKamar(kamarToEdit);
        handleShowModal(); 
    };

    const handleDeleteKamar = (index) => {
        const updatedKamars = [...kamars];
        updatedKamars.splice(index, 1);
        setKamars(updatedKamars);
      };

    return (
        <Container className="mt-5">
            <h1 className="mb-3 border-bottom fw-bold">Dashboard</h1> <Row className="mb-4">
                <Col md={10}>
                    <Card className="h-100 justify-content-center">
                        <Card.Body>
                            <h4>Selamat datang,</h4>
                            <h1 className="fw-bold display-6 mb-3">{user?.username}</h1>
                            <p className="mb-0">Kamu sudah login sejak:</p>
                            <p className="fw-bold lead mb-0">{formatDate(user?.loginAt)}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card>
                        <Card.Body>
                            <p>Bukti sedang ngantor:</p>
                            <img src="https://via.placeholder.com/150" className="img-fluid rounded" alt="Tidak Ada Gambar" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h1 className="mb-3 border-bottom fw-bold">Daftar Kamar</h1>
            <p>Grand Atma saat ini memiliki {kamars.length} jenis kamar yang eksotis</p>
            <Button variant="success" onClick={handleShowModal}>
            <FontAwesomeIcon icon={faPlus} /> Tambah Kamar
            </Button>
            {kamars.length > 0 && (
                kamars.map((kamars, index) => (
            <Row key={index} className="mb-4 mt-3">
                <Col>
                    <Card className="h-100 justify-content-center kamar-card">
                        <Card.Body>
                            <Row>
                                <img src="\src\assets\images\hotelgym.jpg" className="img-fluid rounded img-kamar" alt="Tidak Ada Gambar"/>
                                <Col>
                                    <h4>{kamars.nama}</h4>
                                    <p className="border-bottom">{kamars.deskripsi}</p>
                                    <p>Tipe Kamar: <strong>{kamars.kategori}</strong> | Harga: <strong>Rp {kamars.harga}</strong></p>
                                    <div className="d-flex">
                                        <Button variant="danger" className="btn-hapus-kamar" onClick={() => handleDeleteKamar(index)}>
                                        <FontAwesomeIcon icon={faTrashCan} /> Hapus Kamar
                                        </Button>
                                        <Button variant="primary" onClick={() => handleEditKamar(index)}>
                                        <FontAwesomeIcon icon={faEdit} /> Edit Kamar
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                ))
            )}
            <ModalKamar show={showModal} handleClose={handleCloseModal} handleSaveKamar={handleSaveKamar} initialData={selectedKamar}/>
        </Container>
    );
};

export default DashboardPage;