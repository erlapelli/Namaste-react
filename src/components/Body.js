import RestaurantCard, {withPromtedLabel} from "./RestaurantCard"

import Shimmer from "./Shimmer";

import { useState,useEffect,useContext } from "react";

import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () =>{


    //Local State Variable - Super powerful variable
    const [listOfRestaurants,setListOfRestaurant] = useState([])
    const [filteredRestaurant,setfilteredRestaurant] = useState([])

    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    // console.log("Body Rendered",listOfRestaurants);
    
    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () =>{
        
        const data = await fetch("https://zaika-server.vercel.app/api/restaurants?lat=12.9716&lng=77.5946")
        
                                 

        const json = await data.json();
        // console.log(json)
        
        //optional chaning 
        
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurant(restaurants);
            setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
          
    };


    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus === false) {
        return (

            <h1>
                Looks like you're offline!! Please check 
                your internet connection;
            </h1>
    
    
        );
    }
     
  const {loggedInUser,setUserName} = useContext(UserContext);

   

    return listOfRestaurants.length === 0 ? <Shimmer/>:(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type ="text" 
                    data-testid ="searchInput"
                    className="border border-solid border-black" 
                    value={searchText}
                    onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        console.log(searchText)
                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>

                </div>
                <div className="m-4 p-4 flex items-center rounded-lg">

                <button 
                  className="px-4 py-2 bg-gray-100"
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4
                );
                setListOfRestaurant(filteredList)
                


                }}
                
                >Top Rated Restaurants</button>
                <label className="p-2">UserName :</label>
               <input className="border border-solid border-black pl-2"
                       value={loggedInUser}
                       onChange = {(e)=> setUserName(e.target.value)}/>
                
                </div>
              

                </div>
            <div className="flex flex-wrap">
              
            {  
                
              filteredRestaurant.map((restaurant) => (

               <Link 
                 key={restaurant.info.id}
                 to={"/restaurants/" + restaurant.info.id}
               
               >
                {
                    restaurant.info.promoted ? (
                       <RestaurantCardPromoted resData={restaurant?.info}/> 
                    ) : (
                        <RestaurantCard resData={restaurant?.info}/>
                    )
                }
               
               </Link>

               ))}

                
               

            </div>

        </div>

    )
}

export default Body