import React from "react";
import Layout from "../components/Layout";
import UserImage from "../images/avater-img.jpg";
import { Row, Col } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import "../styles/Profile.css";
import { FaDollarSign } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import FullImg from "../images/img-full.jpg";
import FirstImg from "../images/img1.jpg";
import SecImg from "../images/img2.jpg";
import ThridImg from "../images/img3.jpg";

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="info-boxes profilePage">
          <div className="profile-info">
            <div className="d-flex align-items-start">
              <div className="user-image">
                <img
                  alt="user-image"
                  src={UserImage}
                  className="rounded"
                  width={"150px"}
                />
              </div>
              <div className="info-wrap ms-4">
                <h4 className="my-2">Shaira Diaz</h4>
                <div className="social-data d-flex align-items-center gap-3">
                  <div className="designation d-flex align-items-center">
                    <CiUser />
                    <span className="ms-1">Web Designer</span>
                  </div>
                  <div className="location d-flex align-items-center">
                    <CiLocationOn />
                    <span className="ms-1">420 City Path, AU 123-456</span>
                  </div>
                  <div className="address d-flex align-items-center">
                    <MdOutlineEmail />
                    <span className="ms-1">info@gmail.com</span>
                  </div>
                </div>
                <div className="data-wrap mt-2 d-flex align-items-center gap-3 mt-4">
                  <div className="box rounded p-1 pe-2 d-flex align-items-center gap-3">
                    <div className="icons">
                      <FaDollarSign />
                    </div>
                    <div className="earning">
                      <h5>$1,250</h5>
                      <p className="p-0">Total Earnings</p>
                    </div>
                  </div>
                  <div className="box rounded p-1 pe-2 d-flex align-items-center gap-3">
                    <div className="icons">
                      <LuUsers2 />
                    </div>
                    <div className="earning">
                      <h5>125</h5>
                      <p className="p-0">New Referrals</p>
                    </div>
                  </div>
                  <div className="box rounded p-1 pe-2 d-flex align-items-center gap-3">
                    <div className="icons">
                      <IoBagHandleOutline />
                    </div>
                    <div className="earning">
                      <h5>25</h5>
                      <p className="p-0">New Deals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-soical-links mt-3 border-top">
              <div className="d-flex align-items-center justify-content-end">
                <div className="soical-link me-2">
                  <FaLinkedinIn />
                </div>
                <div className="soical-link me-2">
                  <FaFacebookF />
                </div>
                <div className="soical-link me-2">
                  <FaInstagram />
                </div>
                <div className="soical-link me-2">
                  <FaTwitter />
                </div>
                <div className="soical-link me-2">
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-data mt-4">
          <Row xs={1} md={2} className="g-4">
            <Col lg={6}>
              <div class="user-post info-boxes">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-start">
                    <div className="user-image">
                      <img
                        alt="user-image"
                        src={UserImage}
                        className="rounded"
                        width={"40px"}
                      />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <MdWindow />
                </div>
                <div className="post-image">
                  <img
                    alt="post-1"
                    width={"100%"}
                    src={FullImg}
                    className="mb-2"
                  />
                  <Row className="g-2" xs={1} md={2}>
                    <Col md={4}>
                      <img alt="post-1" width={"100%"} src={FirstImg} />
                    </Col>
                    <Col md={4}>
                      <img alt="post-1" width={"100%"} src={SecImg} />
                    </Col>
                    <Col md={4}>
                      <img alt="post-1" width={"100%"} src={ThridImg} />
                    </Col>
                  </Row>
                </div>
                <p className="py-3 user-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div className="post-review d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <FaImage />
                    <p>25</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaRegHeart />
                    <p>20</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="user-post project-contribution info-boxes">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-start heading mb-4">
                    <div className="post-user">
                      <h4 className="my-2">Projects Contributions</h4>
                      <p>84 New Tasks & 29 Guides</p>
                    </div>
                  </div>
                  <MdWindow />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="user-image">
                      <FaGoogle />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <div className="count-box">0</div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="d-flex align-items-center">
                    <div className="user-image">
                      <FaGoogle />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <div className="count-box">0</div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="d-flex align-items-center">
                    <div className="user-image">
                      <FaGoogle />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <div className="count-box">0</div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="d-flex align-items-center">
                    <div className="user-image">
                      <FaGoogle />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <div className="count-box">0</div>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                  <div className="d-flex align-items-center">
                    <div className="user-image">
                      <FaGoogle />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <div className="count-box">0</div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="user-post info-boxes">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-start">
                    <div className="user-image">
                      <img
                        alt="user-image"
                        src={UserImage}
                        className="rounded"
                        width={"40px"}
                      />
                    </div>
                    <div className="post-user">
                      <h4 className="my-2">Jackson</h4>
                      <p>Yestarday at 4:30 PM</p>
                    </div>
                  </div>
                  <MdWindow />
                </div>
                <p className="py-3 user-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div className="post-review d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <FaImage />
                    <p>25</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaRegHeart />
                    <p>20</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
