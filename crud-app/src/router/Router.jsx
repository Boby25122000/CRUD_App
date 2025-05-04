import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Allusers from "../pages/allusers/Allusers";
import Addusres from "../pages/addusers/Addusres";
import EditUser from "../pages/editUser/EditUser";

export const myRoutes = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Allusers />
            },
            {
                path:"/adduser",
                element:<Addusres />
            }, 
            {
                path: "/editUser/:id",
                element: <EditUser />
            }
        ],
    },
]);