
function Category() {
    return (
        <div className="mt-10">
            <h1 className='text-[#2C485F] text-4xl font-bold text-center'>Browse By Category</h1>
            <p className="text-xl text-gray-500 text-center pt-2  pb-4">Pick your desired service by browsing through cateogories</p>
            <div className="grid-cols-6 grid gap-y-6 w-[90%] mx-auto">
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/mechanic.svg" alt="Mechanic" />
                    <p className="text-center text-xl mt-6">Mechanic</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/medical.svg" alt="Medical" />
                    <p className="text-center text-xl mt-6">Medical</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/personal.svg" alt="Personal Care" />
                    <p className="text-center text-xl mt-6">Personal Care</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/pet.svg" alt="Pet" />
                    <p className="text-center text-xl mt-6">Pet</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/restaurant.svg" alt="Restaurant" />
                    <p className="text-center text-xl mt-6">Restaurant</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/sports.svg" alt="Sports" />
                    <p className="text-center text-xl mt-6">Sports</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/construction.svg" alt="Construction" />
                    <p className="text-center text-xl mt-6">Construction</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/events.svg" alt="Events" />
                    <p className="text-center text-xl mt-6">Party & Events</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/finance.svg" alt="Finance" />
                    <p className="text-center text-xl mt-6">Finance</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/home.svg" alt="Home" />
                    <p className="text-center text-xl mt-6">Home Service</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/hotel.svg" alt="Hotel" />
                    <p className="text-center text-xl mt-6">Hotel</p>
                </div>
                <div className="border-2 border-[#2c485f2c] p-4 rounded-lg w-fit hover:bg-[#2c485f0e] hover:border-[#2c485f6c] cursor-pointer transition duration-300">
                    <img className="h-44 w-56 object-contain" src="/images/travel.svg" alt="Travel" />
                    <p className="text-center text-xl mt-6">Travel</p>
                </div>
            </div>

        </div>
    )
}

export default Category