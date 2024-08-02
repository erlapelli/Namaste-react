import {fireEvent, render,screen} from "@testing-library/react";
import{ act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch = jest.fn(()=>{
    return Promise.resolve ({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },

    });
});


it("Should Search Res List for KFC input ",async()=>{
   await act(async () => render(
<BrowserRouter>
     <Body/>
</BrowserRouter>
  
));

const cardsBeforeSearch = screen.getAllByTestId("resCard");

expect(cardsBeforeSearch.length).toBe(20);

const searchBtn = screen.getByRole("button",{name:"Search"});

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput,{target:{value:"KFC"}});

fireEvent.click(searchBtn);

const cardsAfterSearch = screen.getAllByTestId("resCard");

expect(cardsAfterSearch.length).toBe(1);

});

it("Should filter top Rated Restaurant ",async()=>{
    await act(async () => render(
 <BrowserRouter>
      <Body/>
 </BrowserRouter>
   
 ));
 
 const cardsBeforeSearch = screen.getAllByTestId("resCard");
 
 expect(cardsBeforeSearch.length).toBe(20);
 
 const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants",})

 fireEvent.click(topRatedBtn)

 const cardsAfterFilter = screen.getAllByTestId("resCard");
 expect(cardsAfterFilter.length).toBe(20);

 
 });