import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";


const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard />,
//       },
     
//     ],
//   },
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default router;