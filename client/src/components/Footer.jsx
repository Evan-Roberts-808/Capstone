import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted footer">
      <section className="d-flex justify-content-center p-4 social-banner">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4">
            <FaTwitter className="footer-social-icon" />
          </a>
          <a href="" className="me-4">
            <FaInstagram className="footer-social-icon" />
          </a>
          <a href="" className="me-4">
            <FaLinkedin className="footer-social-icon" />
          </a>
          <a href="" className="me-4">
            <FaGithub className="footer-social-icon" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Chocotonic
              </h6>
              <p>
                Chocotonic is a chocolate company with charity at its core. We
                are passionate about creating delicious chocolate treats while
                making a positive impact on the environment and sustainability.
                A portion of our proceeds is donated to environmental and
                sustainability charities, helping to create a brighter and
                greener future.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Shop
              </h6>
              <p>
                <a href="#!" className="footer-link">
                  Shop All
                </a>
              </p>
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Shop By Category
              </h6>
              <p>
                <a href="#!" className="footer-link">
                  Chocolate Bars
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Chocolate Bells
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Chocolate Squares
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Hot Chocolate
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Chocolate Truffles
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                About
              </h6>
              <p>
                <a href="#!" className="footer-link">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Sustainability
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Causes
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Contact
              </h6>
              <p>
                <FaHome className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <FaPhone icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4 copyright-banner">
        © 2023 Copyright: <span className="company-color">Chocotonic</span>
      </div>
    </MDBFooter>
  );
}

export default Footer;
