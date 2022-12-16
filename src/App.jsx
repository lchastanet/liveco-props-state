import { useState } from "react";

import "./css/App.css";

import houseToRent from "./data/houseToRent.json";

import Header from "./components/Header";
import HouseCard from "./components/HouseCard";
import AvailabilityFilter from "./components/Filters/AvailabilityFilter";
import TypeFilter from "./components/Filters/TypeFilter";
import TextFilter from "./components/Filters/TextFilter";

function App() {
  const [availability, setAvailability] = useState(false);
  const [type, setType] = useState("All");
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header />
      <div>
        <div className="filters">
          <TextFilter setSearchText={setSearchText} />
          <TypeFilter setType={setType} />
          <AvailabilityFilter setAvailability={setAvailability} />
        </div>
        <div className="cards">
          {houseToRent
            .filter((house) =>
              availability ? house.available === availability : true
            )
            .filter((house) => (type !== "All" ? house.type === type : true))
            .filter(
              (house) => house.name.search(new RegExp(searchText, "i")) >= 0
            )
            .map(({ name, desc, img }, i) => (
              <HouseCard
                key={`${name}_${i}`}
                name={name}
                desc={desc}
                img={img}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
