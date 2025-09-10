// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navbarVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, duration: 0.5 },
    },
  };

  const linksContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const linkItem = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar bg="light" expand="md" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link}
            to="/"
            style={{
              // fontFamily: "Knewave",\
              color: "black",
              // textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontSize: "1.5rem",
            }}>
            lukezeng123
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <motion.div
              className="ms-auto d-flex"
              variants={linksContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Home", to: "/home" },
                { name: "About", to: "/about" },
                { name: "Projects", to: "/projects" },
                { name: "Contact", to: "/contact" },
              ].map(({ name, to }) => (
                <motion.div
                  key={to}
                  variants={linkItem}
                  className="me-3"
                >
                  <Nav.Link
                    as={Link}
                    to={to}
                    active={isActive(to)}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {name}
                    <motion.span
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "2px",
                        backgroundColor: "#0d6efd",
                        originX: 0,
                      }}
                      animate={{ scaleX: isActive(to) ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Nav.Link>
                </motion.div>
              ))}
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}
