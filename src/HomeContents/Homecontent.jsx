import Others from "./Others";
import Banner from "./Banner";
import Partners from "./Partners";
import Contact from "./Contact";
import Work from "./Work";
import Category from "./Category";


const Homecontent = () => {

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Work></Work>
            <Others></Others>
            <Partners></Partners>
            <Contact></Contact>
        </div>
    );
};

export default Homecontent;