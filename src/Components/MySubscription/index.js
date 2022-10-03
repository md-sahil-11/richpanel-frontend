import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import "./style.css";

export default function MySubscription() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true)
  const api = useApi();

  useEffect(() => {
    api.get("subs/history").then((res) => {
      console.log(res.data)
      setItem(res.data.pop());
      setLoading(false)
    });
  }, []);

  const cancelSub = (subId) => {
    api.post("subs/plans/cancel").then(res => {
        window.location.href = '/plans'
    })
  }

  if (loading) return <h4>Loading...</h4>
  return (
    <div className="container">
      <div className="top">
        <h1 style={{ color: "#ffffff" }}>Your Subscription</h1>
      </div>

      <div className="package-container">
        {item?.length !== 0 && (
          <div className="packages">
            <h1>{item.plan.plan_name}</h1>
            <h2 className="text1"> ₹{item.plan.price}</h2>
            <ul className="list">
              <li className="first">{item.plan.video_quality} Video Quality</li>
              <li>{item.plan.resolution} Resolution</li>
              <li>{item.plan.devices_str}</li>
              <li>{item.plan.screens} Screens</li>
            </ul>
            {item.is_cancelled ? (
              <span style={{ color: "red" }}>Cancelled</span>
            ) : (
              <div className="button" onClick={() => {
                cancelSub(item.user.subscription)
              }}>
                Cancel
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
