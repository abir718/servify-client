import { Outlet } from "react-router-dom";
import Header from "./HomeContents/Header";
import Footer from "./HomeContents/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet><title>Home | Servify</title></Helmet>  
            <Toaster/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;