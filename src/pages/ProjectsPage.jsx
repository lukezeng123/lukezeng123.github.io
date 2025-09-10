import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (<>
   <h1>My Projects</h1>
   <h4>Sportsbetting Steam Bot</h4>
      <p>
        A Python bot that monitors bookmaker odds and detects “steam” moves in real time. (WIP)
      </p>

   <Button href="https://github.com/lukezeng123/steam_bot/">
    Source Code!
   </Button>

    <Link to="/steam-bot" className="btn btn-primary me-2 mx-3">
      View Demo
    </Link>
  </>);
}