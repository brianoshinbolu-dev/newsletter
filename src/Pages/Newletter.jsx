import { useContext } from "react";
import logo from "../assets/images/illustration-sign-up-desktop.svg";
import logoMobile from "../assets/images/illustration-sign-up-mobile.svg";
import icon from "../assets/images/icon-list.svg";
import "./newsletter.css";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../Context";

function Newsletter() {
  const { data, setData } = useContext(EmailContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.email.value);
    navigate("/thankyou");
  };

  return (
    <div className="container">
      <img src={logoMobile} className="signup-mobile" alt="logo" />
      <form onSubmit={handleSubmit}>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <p>
          <img src={icon} className="list-icon" alt="list-icon" />
          Product discovery and building what matters
        </p>

        <p>
          <img src={icon} className="list-icon" alt="list-icon" />
          Measuring to ensure updates are a success
        </p>
        <p>
          <img src={icon} className="list-icon" alt="list-icon" />
          And much more!
        </p>
        <label htmlFor="email"> Email address </label>
        <input
          type="email"
          id="email"
          placeholder="email@company.com"
          required
        />

        <button> Subscribe to monthly newsletter</button>
      </form>
      <img src={logo} className="signup" alt="logo" />
    </div>
  );
}

export default Newsletter;
