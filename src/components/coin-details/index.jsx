import React from "react";
import "./coin.scss";
import cross from "../../assets/cross.png";

const CoinDetails = ({ coinDetails, setOpenDetails, loading }) => {
  return (
    <div className="coin-details-container">
      {loading ? <h1>Loading...</h1> : null}
      <div className={`${loading ? "hidden" : "details-wrapper"}`}>
        <div className="cross" onClick={() => setOpenDetails(false)}>
          <img src={cross} alt="cross" />
        </div>
        <div className="header-div">
          <div className="left">
            <p className="coin-heading">{coinDetails.name}</p>
            <p className="symbol">{coinDetails.symbol}</p>
          </div>
          <div className="icon-wrapper">
            <img src={coinDetails.iconUrl} alt="icon" />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: coinDetails.description }}
        ></div>
      </div>
    </div>
  );
};

export default CoinDetails;
