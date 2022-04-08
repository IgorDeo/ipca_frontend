import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gitLogo from "../assets/github.png";

const Footer = () => {
  return (
    <>
      <section className="">
        <footer
          className="text-center text-white"
          style={{
            backgroundColor: "#00416e",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Repositório do Projeto</span>
                <a
                  href="https://github.com/IgorDeo/ipca_frontend"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  className="btn btn-link btn-outline-light btn-rounded"
                >
                  <img
                    src={gitLogo}
                    style={{ floatLeft: 0, paddingRight: 10 }}
                    width="30%"
                    height="30%"
                  ></img>
                  GitHub
                </a>
              </p>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "#00416e" }}
          >
            2022 Copyright: Igor Deo Alves
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
