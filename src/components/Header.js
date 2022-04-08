import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#00416e" }}>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontSize: 32, fontWeight: "bold", color: "#fafafa" }}
          >
            <img
              alt=""
              src={logo}
              width="30%"
              height="30%"
              style={{ floatLeft: 0, paddingRight: 30 }}
              className="d-inline-block align-top align-middle"
            />
            IPCA Acumulado
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
