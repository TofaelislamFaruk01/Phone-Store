import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Phones from "../Components/Phones";
import PhoneDetails from "../Components/PhoneDetails";
import MainLayout from "../Layout/MainLayout";

const Router = createBrowserRouter(
    [

        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                  
                    
                  },
              {
                path:"/phones",
                element:<Phones/>,
                loader:()=>fetch('http://localhost:5000/phones')
                
              },
              {
                path:"/phones/:id",
                element:<PhoneDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
              }
            ]
          }


    ]
);

export default Router;