import { Link } from "react-router-dom";

const services = [
    { img: "mechanic.svg", text: "Mechanic" },
    { img: "medical.svg", text: "Medical" },
    { img: "personal.svg", text: "Personal Care" },
    { img: "pet.svg", text: "Pet" },
    { img: "restaurant.svg", text: "Restaurant" },
    { img: "sports.svg", text: "Sports" },
    { img: "construction.svg", text: "Construction" },
    { img: "events.svg", text: "Events & Parties" },
    { img: "finance.svg", text: "Finance" },
    { img: "home.svg", text: "Home Service" },
    { img: "hotel.svg", text: "Hotel" },
    { img: "travel.svg", text: "Travel" },
];

const Category = () => (
    <div className="my-10">
        <h1 className='text-[#2C485F] text-4xl font-bold text-center'>Browse By Category</h1>
        <p className="text-xl text-gray-500 text-center pt-2  pb-4">Pick your desired service by browsing through categories</p>
        <div className="flex items-center justify-center flex-wrap gap-6 mx-auto w-[90%]">
            {services.map(({ img, text }) => {
                const linkPath = `/services/${text.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                    <Link to={linkPath} key={text}>
                        <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                            <img className="h-44 w-56 object-contain" src={`/images/${img}`} alt={text} />
                            <p className="text-center text-xl mt-6">{text}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    </div>

);

export default Category;
