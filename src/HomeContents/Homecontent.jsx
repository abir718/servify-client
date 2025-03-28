import { useLoaderData } from "react-router-dom";
import Featured from "./Featured";
import Others from "./Others";
import Banner from "./Banner";
import Partners from "./Partners";
import Contact from "./Contact";
import Work from "./Work";


const Homecontent = () => {

    const loadServices = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Featured loadServices={loadServices}></Featured>
            <Work></Work>
            <Others></Others>
            <Partners></Partners>
            <Contact></Contact>
        </div>
    );
};

export default Homecontent;