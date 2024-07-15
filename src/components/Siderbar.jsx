import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BsCashCoin } from "react-icons/bs";
import "../styles/SiderBar.css"
import { Nav} from 'react-bootstrap';
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbReport } from "react-icons/tb";
import { GoProjectSymlink } from "react-icons/go";



const Siderbar = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 bg-white h-100 border-end">
        <Link to="/" className='d-flex align-items-center mb-3 mb-md-0 me-0 gap-2 link-dark text-decoration-none siderbar-header border-bottom'>
        <BsCashCoin width={"20px"}/>
        <span className='fs-6'>User Dashbord</span>
        </Link>
        <Nav className=" nav-pills flex-column mb-auto sider-menu my-2">
            <Nav.Item className='my-1 pb-2'>
                <NavLink activeClassName="active" className="px-3 d-flex align-items-center" to={"/"}>
                <IoHomeOutline className='me-3'/>
                Dashboard
                </NavLink>
            </Nav.Item>
            <Nav.Item className='my-1 pb-2'>
                <NavLink className="px-3 d-flex align-items-center" to={"/project"}>
                <GoProjectSymlink className='me-3'/>
                Project
                </NavLink>
            </Nav.Item>
            <Nav.Item className='my-1 pb-2'>
                <NavLink className="px-3 d-flex align-items-center" to={"/report"}>
                <TbReport className='me-3'/>
                Report
                </NavLink>
            </Nav.Item>
            <Nav.Item className='my-1 pb-2'>
                <NavLink className="px-3 d-flex align-items-center" to={"/profile"}>
                <CgProfile className='me-3'/>
                Profile
                </NavLink>
            </Nav.Item>

        </Nav>
      </div>
    </>
  );
}

export default Siderbar;
