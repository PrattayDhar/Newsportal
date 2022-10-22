import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import{FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa"
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/Brand/1.jpg'
import Brand2 from '../../../assets/Brand/2.jpg'
const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Log In With Google</Button>
                <Button className='mb-2'  variant="outline-dark"><FaGithub></FaGithub> Log In With GitHub</Button>
                </ButtonGroup>
                <div>
                <h5 className='mb-2'>Connect Us More Way</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>
                    WhatsApp</ListGroup.Item>
                </ListGroup>
                </div>
                <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand2}
                            alt="First slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
        </div>
      
    );
};

export default RightNav;