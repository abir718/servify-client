import { Outlet } from "react-router-dom";
import Header from "./HomeContents/Header";
import Footer from "./HomeContents/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;