import React from "react";
import "./coins.scss";
import { useState } from "react";
import CoinDetails from "../coin-details";
import { options } from "../../fetch-endpoints/EndPoints";

const Coins = ({ rows }) => {
  const [coinDetails, setCoinDetails] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCoinDetails = async (coinId) => {
    await fetch(
      `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=${coinId}&timePeriod=24h`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setCoinDetails(data.data.coin);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const detailsHandler = (id) => {
    fetchCoinDetails(id);
    setOpenDetails(true);
    setLoading(true);
  };

  return (
    <div className="container">
      {openDetails && (
        <CoinDetails
          coinDetails={coinDetails}
          setOpenDetails={setOpenDetails}
          loading={loading}
        />
      )}
      {rows ? (
        rows.map((coin) => {
          return (
            <div className="coin-item" key={coin.uuid}>
              <div className="top-wrapper">
                <div className="img-wrapper">
                  <img className="icon-img" src={coin.iconUrl} alt="icon" />
                </div>
                <div className="name-wrapper">
                  <p>{coin.name}</p>
                  <p>{coin.symbol}</p>
                </div>
              </div>
              <div className="bottom-wrapper">
                <div>
                  <p>
                    <span>Rank:</span> {coin.rank}
                  </p>
                  <p>
                    <span>Market cap:</span> ${" "}
                    {Intl.NumberFormat("en-US").format(coin.marketCap).slice(7)}
                  </p>
                  <p>
                    <span>Price:</span> ${" "}
                    {Intl.NumberFormat("en-us").format(coin.price)}
                  </p>
                  <p>
                    <span>Change:</span> {coin.change}
                  </p>
                </div>
                <div>
                  <u>
                    <p onClick={() => detailsHandler(coin.uuid)}>
                      More details
                    </p>
                  </u>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h4>No Cryptoz...</h4>
      )}
    </div>
  );
};

export default Coins;
