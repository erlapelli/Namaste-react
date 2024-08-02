# Namaste React

# parcel 
- parcel creates a Dev Build for us 
- It creates Local server for US 
- It is refreshing our page HMR = Hot Module Replacement
- Parcel uses File Watching Algorithm  - it is written in c++
- Beacause of Caching it is Faster Builds 
-it will do image Optimization
-Minification 
-Bundling
-compress
-Consistent Hashing 
-Code Splitting 
-Differential Bundling - support older browsers
-Diagnostic 
-Error Handling 
-https 
-Tree Shaking ALgo - It remove unused code 
-Different dev and prod bundles



Two types Export/Import 

-Default Export/Import 

export default Component;
import Component from "path";

-named Export/Import 

export const Component 
import {Component} from "path";

# 2 types Routing in web apps 
- Client Side Routing - we are not making any network calls because all the components are already loaded into app

- Server Side Routing - server side routing means   you make a network call about(or)contact.html coming from server

# Redux ToolKit 

-Install @reduxjs/toolkit and react-redux 
-Build our store
-Connect our store to our app 
-dispatch(action)
-Selector

# Types of testing (devloper)

- Unit Testing 
- Integration Testing 
- End to End Testing - e2e testing 

# Setting up Testing in our app  

- Install React Testing Library 
- Install jest 
- Install Babel dependencies 
- Configure Babel
- configure Parcel config file to diable default babel transpilation
-jest configuration  
-Jest - npx jest --init 
- Install Jsdom library 
- Install @babel/preset-react - to make Jsx work in test cases 
- Include @babel/preset-react inside my babel config
-Install @testing-library/jest-dom


