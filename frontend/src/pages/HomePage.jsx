import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

      <section className="bg-white p-0 mt-4">
        <div className="container p-0">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className=" text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-danger mb-2">
                  Welcome to Blood Bank
                </h1>
                <p className="lead fw-normal text-danger mb-4">
                  A place where you can find the blood donors and request for
                  blood. We are here to help you. <br />
                  "Empower Compassion, Donate with Passion"
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-outline-danger btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                  <a className="btn btn-outline-dark btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3"
                src="https://www.kvgmch.org/wp-content/uploads/2019/06/blood-bank-min.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <div className="row justify-content-center mb-6">
        <div className="col-md-8">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Search Users</h5>
              <form id="userSearchForm">
                <div className="form-group">
                  <DistrictList
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <BloodGroupLists
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="btn btn-primary btn-block"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {bloodbankData && (
        <div className="hospitals-container m-4 mt-5 p-2 border-primary">
          <div className="w-full flex flex-row justify-between mt-4">
            <h3>Bloodbanks</h3>
            <a
              href="/bloodbanks"
              className="text-blue-500 no-underline hover:underline"
            >
              View All Bloodbanks
            </a>
          </div>
          {bloodbankData.map((bloodbank) => (
            <div className="hospital-item">
              <img
                src={
                  bloodbank.bbImageUrl ??
                  "https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg"
                }
                alt={bloodbank.bbName}
                className="hospital-image"
              />
              <div className="hospital-details">
                <h3 className="text-lg font-bold m-0">{bloodbank.bbName}</h3>
                <p className="font-bold text-white m-0">
                  Address: {bloodbank.bbAddress}
                </p>
                <p className="font-bold text-white m-0">
                  Phone: {bloodbank.bContact}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {hospitalData && (
        <div className="hospitals-container m-4 p-2 border-primary">
          <div className="w-full flex flex-row justify-between mt-4">
            <h3>Hospitals</h3>
            <a
              href="/hospitals"
              className="text-blue-500 no-underline hover:underline"
            >
              View All Hospitals
            </a>
          </div>
          {hospitalData.map((hospital) => (
            <div className="hospital-item">
              <img
                src={
                  hospital.hospitalImageUrl ??
                  "https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg"
                }
                alt={hospital.hospitalName}
                className="hospital-image"
              />
              <div className="hospital-details">
                <h3 className="text-lg font-bold m-0">
                  {hospital.hospitalName}
                </h3>
                <p className="font-bold text-white m-0">
                  Address: {hospital.hospitalAddress}
                </p>
                <p className="font-bold text-white m-0">
                  Phone: {hospital.hospitalContactNumber}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <section id="campaigns" class="w-full py-12 md:py-24 lg:py-32">
        <div class="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <img
              src="/placeholder.svg"
              width="400"
              height="200"
              alt="Campaign 1"
              class="aspect-[2/1] overflow-hidden rounded-t-xl object-cover"
            />
            <div class="space-y-2 p-4">
              <h3 class="text-lg font-bold">Campaign 1</h3>
              <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>May 15, 2023</span>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <line x1="2" x2="5" y1="12" y2="12"></line>
                  <line x1="19" x2="22" y1="12" y2="12"></line>
                  <line x1="12" x2="12" y1="2" y2="5"></line>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                  <circle cx="12" cy="12" r="7"></circle>
                </svg>
                <span>New York, NY</span>
              </div>
              <a
                class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

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
