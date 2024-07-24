import { Carousel } from "react-bootstrap";
import '/src/pages/Dashboard.css';

/* eslint-disable react/prop-types */
const ImageCarousel = ({ images }) => {
    return (
        <Carousel>
            {images?.map((image, index) => (
                <Carousel.Item key={index} style={{borderRadius:"25px"}}>
                    <img className="d-block w-100" src={image.img} alt={image.title} />
                    <Carousel.Caption className="home">
                        <h1 className="d-none d-md-block">{image.title}</h1>
                        <p className="d-none d-md-block">{image.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
export default ImageCarousel;
