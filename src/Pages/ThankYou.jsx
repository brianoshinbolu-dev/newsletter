import "./thankyou.css";
import icon from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../Context";
import { useContext } from "react";

function ThankYou() {
  const { data } = useContext(EmailContext);

  const navigate = useNavigate();

  return (
    <div className="tk-container">
      <div>
        <img src={icon} className="tk-icon" alt="list-icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{data}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button onClick={() => navigate("/")}>Dismiss message</button>
    </div>
  );
}

export default ThankYou;
