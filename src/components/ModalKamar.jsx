import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const ModalKamar = ({ show, handleClose, handleSaveKamar, initialData }) => {
    const [formData, setFormData] = useState({
        nama: "",
        kategori: "",
        harga: "",
        deskripsi: "",
    });

    useEffect(() => {
        setFormData(initialData || {
            nama: "",
            kategori: "",
            harga: "",
            deskripsi: "",
        });
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSimpan = () => {
        handleSaveKamar({ ...formData, id: initialData ? initialData.id : Date.now() });
        setFormData({
            nama: "",
            kategori: "",
            harga: "",
            deskripsi: "",
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><strong>Tambah Kamar</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nama Kamar</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Masukkan Nama Kamar"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tipe Kamar</Form.Label>
                        <Form.Select
                            name="kategori"
                            value={formData.kategori}
                            onChange={handleChange}
                            required
                        >
                            <option selected>Pilih Tipe Kamar</option>
                            <option value="Standar">Standar</option>
                            <option value="Superior">Superior</option>
                            <option value="Luxury">Luxury</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Harga Kamar</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Masukkan Harga Kamar"
                            name="harga"
                            value={formData.harga}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} placeholder="Masukkan Deskripsi"
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSimpan}>
                <FontAwesomeIcon icon={faFloppyDisk} /> Simpan
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ModalKamar;
