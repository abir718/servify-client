import { Outlet } from "react-router-dom";
import Header from "./HomeContents/Header";
import Footer from "./HomeContents/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { Scrollbars } from 'react-custom-scrollbars-2';

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Helmet>
        <title>Home | Servify</title>
      </Helmet>
      <Toaster />

      <Scrollbars

      >
              <Header />
        <Outlet />
              <Footer />
      </Scrollbars>

    </div>
  );
};

export default Home;

