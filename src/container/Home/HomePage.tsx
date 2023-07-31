import React from "react";
import { getReleases } from "../../utils/index";
import { IoIosArrowBack } from "react-icons/io";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import ReleaseContainer from "./ReleaseContainer";
type Props = {};
const HomePage = (props: Props) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-container">
      <div className="navbar-cont">
      <div className="navigate">
        <IoIosArrowBack className="go-back" onClick={handleGoBack} />
        <h2>Payment History</h2>
        <img src="" alt="" />
      </div>
      <div className="date-filter">
        <div className="from-date">
          <label htmlFor="datePicker">From:</label>
          <select id="datePicker" name="selectedDate">
            <option value="">Select a date</option>
          </select>
        </div>
        <div className="to-date">
          <label htmlFor="datePicker">To:</label>
          <select id="datePicker" name="selectedDate">
            <option value="">Select a date</option>
          </select>
        </div>
        <div className="">
          
        </div>
      </div>
      </div>
      <h3 className="transaction-text">Transactions</h3>
      <hr />
      <div className="release-container">
        {getReleases.map((release) => (
          <div className="release-container" key={release.id}>
            <ReleaseContainer
              ammount={release.ammount}
              //@ts-ignore
              name={release.name}
              number={release.number}
              date={release.date}
              src={release.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
