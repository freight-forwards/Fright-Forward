import { useState } from "react"
import ColoredLine from "./ColoredLine"
import FilterButtons from "./FilterButtons"
import Food from "./Food"
import FoodOptions from "./FoodOptions"
import Header from "./Header"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { Dialog } from "@mui/material"
import "./Partnerdel.css"
import axios from "axios"
import Author from "./author"

const Main = ()=>
{
    const [location, setLocation] = useState("Chennai");
    const [searchQuery, setQuery] = useState("");
    const [filters, setFilters] = useState({ rating: 0 });
    const [delivered, setDelivered] = useState(false);
    const [author, setShowAuthor] = useState(false);

    const [queryParameters] = useSearchParams()
  
    const onChangeFilters = (filters) => {
      setFilters(filters);
    };
    const data = {
      "Number":localStorage.getItem("number"),
      "Email": localStorage.getItem("email")
    }
    useEffect(async ()=>{
      console.log(queryParameters.get("order"))
      if(queryParameters.get("order")==="delivered")
      {
        setDelivered(true)
        setTimeout(() => {
          setDelivered(false)
          setShowAuthor(true);
          setTimeout(() => {
            setShowAuthor(false);
          }, 10000);
        }, 10000);
        // await axios.post("https://otp-service.freightforward.live/api/delivery-reached",data);
        
      } 
    },[])
    

  return <>  {!delivered?<><Header
        functions={[location, setLocation]}
        setQuery={setQuery}
        searchQuery={searchQuery}
      />
     {!author? <FoodOptions /> :<Author/>}
      <ColoredLine />
      <FilterButtons filters={filters} onChangeFilters={onChangeFilters} />
      <h1 className="mx-44 pt-4 text-3xl font-normal food-head" >Best Food in {location}</h1>
      <Food filters={filters} />
      </>
      :
      <Dialog fullWidth open={true}>
        <div className="center" >
      <h1 className="kh1">Order Delivered</h1>
      <h2 className="kh2">Congratulation your order has been delivered</h2>
      <img
       className="king"
        src="https://media.tenor.com/1YWH1QI9pVcAAAAi/utya-kaczka.gif"
        alt="this slowpoke moves"
        width="250"
      />
    </div>
       </Dialog>}
      </>
}
export default Main;