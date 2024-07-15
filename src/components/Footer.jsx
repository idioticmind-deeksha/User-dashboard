import "../styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
        <div className="d-flex align-items-center justify-content-between bg-white border-top px-4 inner-footer">
            <div className="copywrite">
                <p>&copy;2024 All Rights Reserved</p>
            </div>
            <div className="">
                <p>Created by: <Link to="/">User Dashboard</Link></p>
            </div>
        </div>
        </>
    );
}
export default Footer;