import { useState } from "react"
import ColoredLine from "./ColoredLine"
import FilterButtons from "./FilterButtons"
import Food from "./Food"
import FoodOptions from "./FoodOptions"
import Header from "./Header"

const Main = ()=>
{
    const [location, setLocation] = useState("Chennai");
    const [searchQuery, setQuery] = useState("");
    const [filters, setFilters] = useState({ rating: 0 });
  
    const onChangeFilters = (filters) => {
      setFilters(filters);
    };
  
  return <>  <Header
        functions={[location, setLocation]}
        setQuery={setQuery}
        searchQuery={searchQuery}
      />
      <FoodOptions />
      <ColoredLine />
      <FilterButtons filters={filters} onChangeFilters={onChangeFilters} />
      <h1 className="mx-44 pt-4 text-3xl font-normal food-head" >Best Food in {location}</h1>
      <Food filters={filters} />
      </>
}
export default Main;