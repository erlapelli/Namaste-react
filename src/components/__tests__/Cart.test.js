import { fireEvent, render,screen } from "@testing-library/react";
import{ act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header";
import DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Header";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json:() => Promise.resolve(DATA),
    })
);

it("should Load Restaurant Menu Component",async()=>{
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        
    </Provider>   
    </BrowserRouter> 
    
));

    const accordionHeader = screen.getByText("Cheese Volcano(8)");
    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(8);

    const addBtns = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    // expect(screen.getAllByTestId("foodItems").length).toBe(10);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
     expect(screen.getAllByTestId("foodItems").length).toBe(8);

     expect(
        screen.getByText("Cart is empty.Add Items to the cart!")
     ).toBeInTheDocument();
});