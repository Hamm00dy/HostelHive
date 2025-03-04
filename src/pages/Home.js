import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "/images/fisat_1.jpeg",
  "/images/fisat_2.jpeg",
  "/images/fisat3.jpeg",
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Image Transition */}
      <div
        className="hero-section"
        style={{
          background: `url(${images[currentImage]}) center/cover no-repeat`,
          height: "400px",
          transition: "background 1s ease-in-out",
        }}
      >
        <div className="overlay text-white text-center d-flex flex-column justify-content-center h-100">
          <h1>Welcome to FISAT Hostel</h1>
          <p>Your home away from home</p>
        </div>
      </div>

      {/* Notifications & Forms Section */}
      <div className="container mt-4">
        <div className="row">
          {/* Notifications Section */}
          <div className="col-md-6">
            <h3>Notifications</h3>
            <div className="scroll-box">
              <div className="notification-card">
                <span className="date-badge">2024-10-19</span>
                <h5>Revised rules of CUSAT Hostels.</h5>
                <a href="#">open</a>
              </div>
              <div className="notification-card">
                <span className="date-badge">2024-07-09</span>
                <h5>Hostel Allotment Instructions for PG First Year Students</h5>
                <a href="#">open</a>
              </div>
              <div className="notification-card">
                <span className="date-badge">2024-06-05</span>
                <h5>New Admission Guidelines</h5>
                <a href="#">open</a>
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div className="col-md-6">
            <h3>Forms</h3>
            <div className="scroll-box">
              <div className="form-card">
                <h5>Form C</h5>
                <a href="#">open</a>
              </div>
              <div className="form-card">
                <h5>Late Entry Form</h5>
                <a href="#">open</a>
              </div>
              <div className="form-card">
                <h5>Room/Hostel Change</h5>
                <a href="#">open</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel Details */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Boys' Hostel</h5>
                <p className="card-text">Facilities: Wi-Fi, Mess, Laundry</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Girls' Hostel</h5>
                <p className="card-text">Facilities: Wi-Fi, Security, Common Room</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Guest House</h5>
                <p className="card-text">For visitors and parents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
