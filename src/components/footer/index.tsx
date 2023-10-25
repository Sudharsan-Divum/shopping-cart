import { RiFacebookCircleFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import { Nav, NavLink, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div style={{ position: "absolute", bottom: "0", overflowY: "visible" }}>
        <footer className="bg-primary text-white text-center text-lg-start mt-12">
          <div className=" p-4">
            <div className="row">
              <Row>
                <Nav>
                  <Nav.Link to="/" as={NavLink}>
                    <img
                      src={logo}
                      style={{ height: "150px", width: "150px" }}
                    />
                  </Nav.Link>
                </Nav>
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">ShopyFy</h5>

                  <p>
                    We're delighted to have you here! Discover the latest
                    trends, explore our featured products, and make your house
                    feel like a home. If you have any questions or need
                    assistance, don't hesitate to reach out to our friendly
                    team. Your comfort and style, our priority!
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 r-0">
                  <h5 className="text-uppercase">Social Media</h5>

                  <a
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                  >
                    <RiFacebookCircleFill />
                  </a>

                  <a
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                  >
                    <FiTwitter />
                  </a>

                  <a
                    className="btn text-white btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <AiOutlineGooglePlus />
                  </a>

                  <a
                    className="btn text-white btn-floating m-1"
                    style={{
                      backgroundColor: "#3399ff",
                    }}
                    href="#!"
                    role="button"
                  >
                    <FiInstagram />
                  </a>
                </div>
              </Row>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023-2024 Copyright:{" "}
            <Link to={"/"}>
              <span className="text-white"> ShopyFY</span>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
