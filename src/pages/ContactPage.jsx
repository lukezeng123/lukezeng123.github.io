import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function ContactPage() {
  return (<>
  <div className="d-flex justify-content-center align-items-center vh-100 flex-column" >
  <p className="mb-3">Get in touch through my socials :&#41;&#41;</p>
  <div className="icon-link fs-3 text-dark">
    <a href="https://www.linkedin.com/in/luke-zeng-439b43187" target="_blank" aria-label="LinkedIn" style={{ color: "black" }} className="mx-3"><FaLinkedin size={75}/></a>
    <a href="mailto:luke.zeng@student.unsw.edu.au" target="_blank" style={{ color: "black" }} className="mx-3"><FaEnvelope size={75}/></a>
    <a href="https://github.com/lukezeng123/lukezeng123.github.io" target="_blank" style={{ color: "black" }} className="mx-3"><FaGithub size={75}/></a>
  </div>
  </div>
 
  </>);
  
}