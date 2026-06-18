import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../scss/Markets.scss";

import {
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiGlobe
} from "react-icons/fi";

export default function Markets() {
  const [timeRange, setTimeRange] = useState("1Y");
  const [activeTab, setActiveTab] = useState("insights");

  const [selectedRegion, setSelectedRegion] = useState(
    "All Regions (National)"
  );

  const regions = [
  "All Regions (National)",
  "Punjab",
  "Haryana",
  "Uttar Pradesh",
  "Bihar",
  "West Bengal",
  "Maharashtra",
  "Gujarat",
  "Rajasthan",
  "Madhya Pradesh",
  "Karnataka",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "Kerala",
  "Odisha",
  "Assam"
  ];

  return (
    <>
      <Sidebar />

      <div className="markets-container">

        <h1>Market Trends</h1>

        <p className="market-subtitle">
          Personalized market validation • General dashboard • Regional comparison
        </p>

        <div className="filter-box">

          <div className="filter-header">

            <div className="location-section">
              <FiMapPin />
              <span>Location:</span>

              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div className="time-range-title">
              <FiCalendar />
              <span>Time Range:</span>
            </div>

          </div>

          <div className="time-buttons">
            {["1M", "6M", "1Y", "2Y", "3Y"].map((range) => (
              <button
                key={range}
                type="button"
                className={timeRange === range ? "active" : ""}
                onClick={() => setTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>

        </div>

        <div className="tabs">

          <button
            type="button"
            className={`tab-btn ${
              activeTab === "insights" ? "active" : ""
            }`}
            onClick={() => setActiveTab("insights")}
          >
            <FiTrendingUp />
            Personalized Insights
          </button>

          <button
            type="button"
            className={`tab-btn ${
              activeTab === "dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <FiGlobe />
            General Market Dashboard
          </button>

        </div>

        <div className="empty-state">

          <h2>No Recommendations Yet</h2>

          <p>
            Run the Crop Recommendation System first. It analyzes your soil
            conditions and local weather to suggest the best crops, then
            validates those recommendations against live market data.
          </p>

          <button className="recommend-btn">
            Go to Recommendations
          </button>

        </div>

      </div>
    </>
  );
}