import React, { useEffect, useState } from "react";
import "./styles.css";
import useApi, { isAuthenticated } from "../../hooks/useApi";
import StripeCardForm from "../CheckoutForm";

function PlanSelection() {
  const [check, setCheck] = useState("monthly");
  const userAuthenticated = isAuthenticated();
  const [data, setData] = useState([]);
  const [priceId, setPriceId] = useState("")
  const [paymentBody, showPaymentBody] = useState(false);
  const api = useApi();

  useEffect(() => {
    // if (data.length != 0) return;
    api
      .get("subs/plans")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [check]);

  if (!userAuthenticated) {
    window.location.href = "/sign-up";
  }
  // else if (data.length == 0) return null
  if (paymentBody) {
    return (
      <div className="auth-inner">
        <StripeCardForm priceId={priceId} />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="top">
        <h1 style={{ color: "#ffffff" }}>Plans & Pricing</h1>
        {/* <div className="toggle-btn">
          <span style={{ margin: "0.8rem", color: "#ffffff" }}>Annually</span>
          <label className="switch">
            <input
              type="checkbox"
              id="checbox"
              onClick={() => {
                if (check == "monthly")
                  setCheck("yearly")
                else setCheck("monthly")
              }}
            />
            <span className="slider round"></span>
          </label>
          <span style={{ margin: "0.8rem", color: "#ffffff" }}>Monthly</span>
        </div> */}
      </div>

      <div className="package-container">
        {data.length !== 0 &&
          data.map((item) => 
            <div className="packages" key={item.id}>
              <h1>{item.plan_name}</h1>
              <h2 className="text1"> ₹{item.price}</h2>
              <ul className="list">
                <li className="first">{item.video_quality} Video Quality</li>
                <li>{item.resolution} Resolution</li>
                <li>{item.devices_str}</li>
                <li>{item.screens} Screens</li>
              </ul>
              <div className="button" onClick={() => {
                setPriceId(item.price_id)
                showPaymentBody(true)
              }}>
                Next
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default PlanSelection;
