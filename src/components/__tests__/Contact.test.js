import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us page Test Case",()=>{
     
    // beforeAll(() => {
    //     console.log("Before All");
    // })

    // AftereAll(() => {
    //     console.log("After All");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterEach(()=>{
    //     console.log("after Each");
    // })

    test("Should load contact us component",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    
    })
    
    test("Should load button inside Contact us component",()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    
    
    })
    
    test("Should load input name inside Contact us component",()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name")
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    
    test("Should load 2 input name inside Contact us component",()=>{
        render(<Contact/>);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox")
        console.log(inputBoxes.length);
    
        // Assertion
        expect(inputBoxes.length).toBe(2);
        
    });

});

