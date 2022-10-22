import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cetagory from "../../Pages/Cetagory/Cetagory/Cetagory";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const routes =createBrowserRouter([

{
    path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',
    element:<Home></Home>
},
{
    path:'/cetagory/:id',
    element:<Cetagory></Cetagory>
},
{
    path:'/news/:id',
    element:<News></News>
}
    ]
}


])