import { Outlet } from "react-router-dom";
import Header from "./HomeContents/Header";
import Footer from "./HomeContents/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import CustomScrollbar from "./CustomScrollbar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Helmet>
        <title>Home | Servify</title>
      </Helmet>
      <Toaster />

      <div className="flex-1 overflow-hidden">
        <CustomScrollbar>
        <Header />
            <Outlet />
            <Footer />
        </CustomScrollbar>
      </div>


    </div>
  );
};

export default Home;
