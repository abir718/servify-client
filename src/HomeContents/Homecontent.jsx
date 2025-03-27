import { useLoaderData } from "react-router-dom";
import Featured from "./Featured";
import Others from "./Others";
import Banner from "./Banner";
import Partners from "./Partners";


const Homecontent = () => {

    const loadServices = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Featured loadServices={loadServices}></Featured>
            <Partners></Partners>
            <Others></Others>
        </div>
    );
};

export default Homecontent;