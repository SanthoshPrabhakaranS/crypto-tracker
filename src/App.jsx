import CryptoGallery from "./components/crypto-gallery";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinDetails from "./components/coin-details";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoGallery />} />
          <Route path="/coin-details" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
