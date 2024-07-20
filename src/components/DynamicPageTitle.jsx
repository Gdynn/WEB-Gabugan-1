import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
const DynamicPageTitle = () => {
    //menggunakan hook useLocation untuk mengambil path
    const location = useLocation();
    //mengatur title sesuai dengan path const 
    const switchPageTitle = (path) => {
        switch (path) {
            case "/":
                return "HomePage";
            case "/profile":
                return "ProfilePage"; 
            case "/wisata":
                return "WisataPage"; 
            default:
                return "DefaultPage";
        };
    };
    return (
        <HelmetProvider>
            <Helmet>
                <title>{switchPageTitle(location.pathname)} | Gabugan 1</title> 
                <meta name="description" content="Profile Gabugan 1" /> 
            </Helmet>
        </HelmetProvider>
    );
};
export default DynamicPageTitle;
