import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import SteamBotDemo from "./pages/SteamBotDemo";
import './App.css'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header (always visible) */}
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/steam-bot" element={<SteamBotDemo />} />
        </Routes>
      </main>

      <Footer />
    </div>
    
  )
}

export default App
