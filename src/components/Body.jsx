import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { BODY_BG_IMG } from "../utils/constant";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}>
        <img src={BODY_BG_IMG} />
      </RouterProvider>
    </div>
  );
};

export default Body;
