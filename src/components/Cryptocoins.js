import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import BiddingModal from "./BiddingModal";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

export default function Cryptocoins() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchAll = () => {
    const val = axios("https://api2.binance.com/api/v3/ticker/24hr");
    val.then((res) => {
      setIsLoading(true);
      if (res.status === 200) {
        setData(res.data);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="App">
      <h1>All Coins</h1>
      <input
        type="text"
        placeholder="Search for symbol"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th>Percentage Change</th>
            <th>Last Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <tbody>
            {data ? (
              data
                .filter((val) => {
                  return val.symbol
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((coin, index) => (
                  <tr key={index + 1} data-testid="coin-row">
                    <td>{index + 1}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.priceChangePercent}</td>
                    <td>{coin.lastPrice}</td>
                    <td>{coin.volume}</td>
                    <td>
                      <BiddingModal coin={coin} />
                    </td>
                  </tr>
                ))
            ) : (
              <div className="row mt-4">
                <div className="col-md-6">
                  <h4>No result found</h4>
                </div>
              </div>
            )}
          </tbody>
        )}
      </Table>
    </div>
  );
}
