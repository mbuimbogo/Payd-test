import { RiMenu2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineCreditScore } from "react-icons/md";
import { BsArrowRight, BsCreditCard } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import ReleaseContainer from "../ReleaseContainer";
import { getReleases } from "../../../utils";

function Dashboard() {
    const navigate = useNavigate();
    const handleGoToPayments = () => {
      navigate("/home");
    };
  return (
    <>
      <div className="wrapper">
        <div className="detail-wrapper">
        <div className="high_navbar">
          <div className="menu_icon">
            <RiMenu2Line size={42} />
          </div>
          <div className="prof-bell">
            <div className="not_icon">
              <IoMdNotificationsOutline size={42} />
            </div>
            <div className="profile-image">
              <img src="" alt="" height={60} width={72} />
            </div>
          </div>
        </div>
        <div className="user_details">
          <p>
            Hello <span className="user_name">Marl,</span>
          </p>
        </div>
          <div className="balance_dashboard">
            <div className="balance-dashboard-wid">
            <div className="cash">
              <div className="image_wrapper">
                <FaCreditCard size={120} color="white" />
              </div>
              <div className="loan_details">
                <p>Loan Balance</p>
                <p className="cash_value">KES 29,005</p>
              </div>
            </div>
            <div className="">
              <BsArrowRight size={40} color="white" />
            </div>
            </div>
          </div>
        <div className="quick_text">
          <p className="quick-title">Quick Actions</p>
          <div className="quick-navigation">
            <button className="quick-item" onClick={handleGoToPayments} >
              <MdOutlineCreditScore size={50} onClick={handleGoToPayments}/>
              <p>Payments</p>
            </button>
            <button className="quick-item" onClick={handleGoToPayments} >
              <BsCreditCard size={50} onClick={handleGoToPayments} />
              <p>Loans</p>
            </button>
            <button className="quick-item" onClick={handleGoToPayments} >
              <BiSolidDollarCircle size={50} onClick={handleGoToPayments}/>
              <p>Payments</p>
            </button>
          </div>
        </div>

        </div>
        <div className="more-releases">
            <h3 className="recent">Recent Transactions</h3>
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
    </>
  );
}

export default Dashboard;