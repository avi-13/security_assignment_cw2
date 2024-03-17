import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../src/style/homepage.css";
import "../../src/style/navbar.css";
import {
  fetchHospitalsApi,
  getallBloodBankApi,
  searchUsersApi,
} from "../apis/api";
import BloodGroupLists from "../components/BloodGroupsList";
import CustomCircularProgress from "../components/CustomCircularProgress";
import DistrictList from "../components/DistrictsList";

const HomePage = ({ history }) => {
  const [hospitalData, setHospitalData] = useState([]);
  const [bloodbankData, setBloodbankData] = useState([]);
  const [district, setDistrict] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    searchUsersApi(district, bloodGroup)
      .then((res) => {
        navigate("/users-list", { state: { searchedUsers: res.data.users } });
      })
      .catch((err) => {
        console.error("Error searching users:", err);
      });
  };

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

  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "pub_388315c80e0c4fa3e9c2a9fbeba0625cce9fe";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${apiKey}&q=health&country=np`
        );
        const data = await response.json();
        if (response?.ok) {
          setNewsData(data?.results);
        } else {
          setError(data?.results);
        }
      } catch (error) {
        setError("Error fetching news. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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

      <section class="bg-white p-0 mt-4">
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

      <div class="row justify-content-center mb-6">
        <div class="col-md-8">
          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title text-center mb-4">Search Users</h5>
              <form id="userSearchForm">
                <div class="form-group">
                  <DistrictList
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <BloodGroupLists
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  class="btn btn-primary btn-block"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <section class="content-section" id="portfolio">
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
      </section> */}

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
                  src={
                    hospital.hospitalImageUrl ??
                    "https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg"
                  }
                  alt={hospital.hospitalName}
                  height={20}
                  width={500}
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
                  src={bloodbank.bbImageUrl}
                  alt={bloodbank.bbName}
                  height={20}
                  width={500}
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

      {isLoading && <CustomCircularProgress />}
      {error && (
        <p className="text-center text-danger">
          Error: No News Available Right Now
        </p>
      )}
      {!isLoading && !error && (
        <div className="container mt-4">
          <h2 className="text-center">Latest News</h2>
          <div className="row">
            {newsData?.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <img
                    src={item?.image_url ?? "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={item?.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.pubDate}</h5>
                    <p className="card-text">{item.category}</p>
                    <p className="card-text">{item.language}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
