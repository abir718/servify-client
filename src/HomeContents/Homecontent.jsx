import { useLoaderData } from "react-router-dom";
import Featured from "./Featured";
import Others from "./Others";
import Slide from "./Slide";


const Homecontent = () => {

    const loadServices = useLoaderData();

    return (
        <div>
            <Slide></Slide>
            <Featured loadServices={loadServices}></Featured>
            <Others></Others>
        </div>
    );
};

export default Homecontent;