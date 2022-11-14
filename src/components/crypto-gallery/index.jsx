import React, { useEffect, useState } from "react";
import Coins from "../coins";
import "./cryptoGallery.scss";
import { options } from "../../fetch-endpoints/EndPoints";

const CryptoGallery = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = () => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=21&offset=0",
      options
    )
      .then((response) => response.json())
      .then((data) => setCoins(data.data.coins))
      .catch((err) => console.error(err));
  };

  //Search-filter
  const searchItems = (rows) => {
    return rows.filter((row) => row.name.toLowerCase().indexOf(search) > -1);
  };
  const rows = searchItems(coins);

  return (
    <div className="container">
      <div className="input-div">
        <h1 className="heading">Cryptoz Tracker</h1>
        <input
          type="text"
          placeholder="Search crypto..."
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Coins rows={rows} />
      </div>
    </div>
  );
};

export default CryptoGallery;
