import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    
    const {resData} = props;
    //console.log(resData)
    

    const {  
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime

    } = resData 


    


    return(
        <div data-testid="resCard"
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img 
        className="rounded-lg"
        alt="res-logo"
        src = {CDN_URL + cloudinaryImageId}
        />
    
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>  
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{deliveryTime} minutes</h4>
        </div>
        
    );
};

//Higher Order Component 

//input - RestaurantCard => RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-bleck text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;