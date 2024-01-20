import { React } from 'react';
import '../../src/style/homepage.css';
import '../../src/style/navbar.css';
const HomePage = () => {
  return (
    <>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../assets/images/donation.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../assets/images/after.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../assets/images/csone.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="homeStats">
        <div className="hmstats">
          <i className="fas fa-user"></i>
          <span className="count">1000</span>
          <p>Donors</p>
        </div>
        <div className="hmstats">
          <i className="fas fa-hospital"></i>
          <span className="count">50</span>
          <p>Hospitals</p>
        </div>
        <div className="hmstats">
          <i className="fas fa-tint"></i>
          <span className="count">20</span>
          <p>Blood Banks</p>
        </div>
      </div>

      <div class="image-container">
        <img src="../assets/images/final.png" class="full-image" alt="Full Image" />
        <img src="../assets/images/mobs.png" class="overlapping-image" alt="Overlapping Image" />
      </div>

    </>

  )
}

export default HomePage
