import {Navbar, Nav, Container} from 'react-bootstrap';
import AvatarImg from "../images/avater-img.jpg";
import "../styles/Header.css";
import { RiMenu2Line } from "react-icons/ri";
const Header = () => {
  return (
    <>
        <Navbar bg="white" data-bs-theme="light" sticky="top" className='border-bottom'>
          <Container className='px-0 mx-3'>
            <Navbar.Brand href="#home"><RiMenu2Line /></Navbar.Brand>
            <Nav className="ms-auto">
              <div className="avatar online position-relative rounded-circle" width="34px" height="34px">
                <img className="avatar-img" src={AvatarImg} alt='avatar-img'/>
              </div>
            </Nav>
          </Container>
        </Navbar>
    </>
  );
};
export default Header;
