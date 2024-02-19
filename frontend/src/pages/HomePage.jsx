import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/style/homepage.css";
import "../../src/style/navbar.css";
import { fetchHospitalsApi, getallBloodBankApi } from "../apis/api";
const HomePage = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const [bloodbankData, setBloodbankData] = useState([]);

  useEffect(() => {
    fetchHospitalsApi().then((res) => {
      if (res.data.success && res.data.hospital.length > 0) {
        setHospitalData(res.data.fewHospitals);
      }
    });
  }, []);

  useEffect(() => {
    getallBloodBankApi().then((res) => {
      if (res.data.success) {
        setBloodbankData(res?.data?.fewBloodBanks);
      }
    });
  }, []);
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../assets/images/donation.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../assets/images/after.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../assets/images/csone.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section class="bg-white">
        <div class="container p-0">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class=" text-center text-xl-start">
                <h1 class="display-5 fw-bolder text-danger mb-2">
                  Welcome to Blood Bank
                </h1>
                <p class="lead fw-normal text-danger mb-4">
                  A place where you can find the blood donors and request for
                  blood. We are here to help you. <br />
                  "Empower Compassion, Donate with Passion"
                </p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    class="btn btn-outline-danger btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a class="btn btn-outline-dark btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                class="img-fluid rounded-3"
                src="https://www.kvgmch.org/wp-content/uploads/2019/06/blood-bank-min.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <section class="content-section" id="portfolio">
        <div class="container px-4 px-lg-5">
          <div class="content-section-heading text-center">
            <h2 class="mb-5">Recent Projects</h2>
          </div>
          <div class="row gx-0">
            <div class="col-lg-6">
              <a class="portfolio-item" href="#!">
                <div class="caption">
                  <div class="caption-content d-flex flex-column align-items-center">
                    <h1 class="h2 text-center">Donors Registered</h1>
                    <h1 class="mb-0">25</h1>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/08/cover-image-2-4.jpg"
                  alt="..."
                />
              </a>
            </div>
            <div class="col-lg-6">
              <a class="portfolio-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="h2">Ice Cream</div>
                    <p class="mb-0">
                      A dark blue background with a colored pencil, a clip, and
                      a tiny ice cream cone!
                    </p>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="https://wallpapercave.com/wp/wp4323537.png"
                  alt="..."
                />
              </a>
            </div>
            <div class="col-lg-6">
              <a class="portfolio-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="h2">Strawberries</div>
                    <p class="mb-0">
                      Strawberries are such a tasty snack, especially with a
                      little sugar on top!
                    </p>
                  </div>
                </div>
                <img class="img-fluid" src="../assets/images/6.png" alt="..." />
              </a>
            </div>
            <div class="col-lg-6">
              <a class="portfolio-item" href="#!">
                <div class="caption">
                  <div class="caption-content">
                    <div class="h2">Workspace</div>
                    <p class="mb-0">
                      A yellow workspace with some scissors, pencils, and other
                      objects.
                    </p>
                  </div>
                </div>
                <img class="img-fluid" src="../assets/images/7.png" alt="..." />
              </a>
            </div>
          </div>
        </div>
      </section>

      {hospitalData && (
        <section className="pb-2 mb-5">
          <div className="d-flex flex-row justify-content-between ms-5 me-5">
            <h1>Hospitals</h1>
            <Link className="fs-4" to={"/hospitals"}>
              View more
            </Link>
          </div>
          <div className="hmprodContainer">
            {hospitalData.map((hospital) => (
              <div class="hmproduct-image">
                <img
                  src="https://th.bing.com/th/id/OIP.4a_l-ZuzAB3peOD3giyFcgHaFC?rs=1&pid=ImgDetMain"
                  alt="Hospital Image"
                />

                <div class="hminfo bg-success">
                  <h4>{hospital.hospitalName}</h4>
                  <ul>
                    <li>
                      <strong>{hospital.hospitalContactNumber}</strong>
                    </li>
                    <li>
                      <strong>{hospital.hospitalType} </strong>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {bloodbankData && (
        <section className="pb-2 mb-5">
          <div className="d-flex flex-row justify-content-between ms-5 me-5">
            <h1>BloodBanks</h1>
            <Link className="fs-4" to={"/bloodbanks"}>
              View more
            </Link>
          </div>
          <div className="hmprodContainer">
            {bloodbankData.map((bloodbank) => (
              <div class="hmproduct-image">
                <img
                  src="https://1.bp.blogspot.com/-tE3_KHkDN8A/Xd_dBwPX3LI/AAAAAAAAAKg/3AeFvNnGlcMov2q2aIbwk8WKDC79qdacgCLcBGAsYHQ/s1600/blood-bank.jpg"
                  alt="Blodbank Image"
                />

                <div class="hminfo">
                  <h4>{bloodbank.bbName}</h4>
                  <ul>
                    <li>
                      <strong>{bloodbank.bbAddress} </strong>
                    </li>
                    <li>
                      <strong>{bloodbank.bContact} </strong>
                    </li>
                    <li>
                      <strong>{bloodbank.operatingHours} </strong>
                    </li>
                    <li>
                      <strong>{bloodbank.availableBloodGroups} </strong>
                    </li>

                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* <div class="image-container">
        <img
          src="../assets/images/final.png"
          class="full-image"
          alt="Full Image"
        />
        <img
          src="../assets/images/mobs.png"
          class="overlapping-image"
          alt="Overlapping Image"
        />
      </div> */}
    </>
  );
};

export default HomePage;
