import { Outlet } from "react-router-dom";
import Header from "./HomeContents/Header";
import Footer from "./HomeContents/Footer";
import { Toaster } from "react-hot-toast";

const Home = () => {
    return (
        <div>
            <Toaster/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;