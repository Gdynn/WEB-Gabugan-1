import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import 'bootstrap/dist/css/bootstrap.min.css';

//import semua halaman dan layout
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import WisataPage from "../pages/WisataPage";

//membuat router
const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
    {
        //mengatur layout dan children
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/wisata",
                element: <WisataPage />,
            },
        ],
    },
]);

const AppRouter = () => {
    return (
        <>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};
export default AppRouter;