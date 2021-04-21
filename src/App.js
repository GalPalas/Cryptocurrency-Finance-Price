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
    <div className="container fluid">
      <div className="row justify-content-center padding">
        <div className="col-12">
          <h1 className="coin-text text-center">Search a currency</h1>
        </div>
        <Input onFilterChange={handleChange} />
        <Table data={filteredCoins} />
      </div>
    </div>
  );
}

export default App;
