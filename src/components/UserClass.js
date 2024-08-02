import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        // console.log(this.props.name + "Child Constructor")

        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
               
            }
            
        }

    }

    async componentDidMount(){

        console.log(this.props.name + "child Component Did Mount")

        const data = await fetch("https://api.github.com/users/akshaymarch7");

        const json = await data.json()   

        this.setState({
            userInfo:json,
        });

        console.log(json)

    }


    componentDidUpdate() {
        // console.log("Component Did Update");
    }

    componentWillUnmount(){
        // console.log("Component will Unmount")
    }

    render() {

       
    

        // const{name,location} = this.props;

        const {name,location,avatar_url} = this.state.userInfo;
       
        
        console.log(this.props.name + "child Render");

        return (
            <div className="user-card">
                
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@akshaymarch7</h4>
    
            </div>
        );


    }
}

export default UserClass;


/**
 * -----MOUNTING-----
 * 
 * Constructor(dummy)
 * Render(dummy)
 *    <HTML Dummy>
 * Component Did Mount 
 *   <API Call>
 *   <this.setState> -> State Variable is updated
 * 
 * ---- UPDATE 
 * 
 *      render(APi data)
 *      <HTML(new API data)>
 * 
 * componentDid Update
 * 
 * 
 * 
 * 
 */