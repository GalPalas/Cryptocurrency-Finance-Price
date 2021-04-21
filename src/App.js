import { useEffect, useState } from "react";
import Table from "./components/common/table";
import Input from "./components/common/input";
import { useDispatch, useSelector } from "react-redux";
import { loadCoins, getFilteredCoins } from "./store/coins";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(loadCoins());
  }, [dispatch]);

  const filteredCoins = useSelector(getFilteredCoins(search));

  return (
    <div className="container">
      <div className="cooin-search justify-content-center">
        <div className="row padding">
          <div className="col-12">
            <h1 className="coin-text text-center">Search a currency</h1>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-md-6 padding">
            <Input onFilterChange={handleChange} />
          </div>
          <div className="row padding">
            <div className="col-12">
              <Table data={filteredCoins} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
