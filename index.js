import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./src/App";
import Home from "./src/pages/Home";
import ExamDetails from "./src/pages/ExamDetails";
import BookASeat from "./src/pages/BookASeat";


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"register/:id",
                element:<ExamDetails/>
            },
            {
                path:"/booking",
                element:<BookASeat/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);