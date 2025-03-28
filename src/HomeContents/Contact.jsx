

function Contact() {
    return (
        <div className="pb-10">
            <h1 className="text-4xl font-bold text-[#2C485F] text-center">Contact Us</h1>
            <p className="text-xl text-gray-500 text-center pt-2  pb-4">Got any query ? feel free to reach us</p>
            <div className="bg-[#2C485F] p-6 w-[90%] mx-auto rounded-lg">
                <div className="lg:flex items-center justify-around mx-auto py-6">
                    <img className="w-80 h-full mb-6" src="/images/mail2.png" alt="" />
                    <div className="flex flex-col gap-6">
                        <h1 className="text-2xl font-bold text-white">Query Form</h1>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[700px]" />
                        </div>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Email" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[700px]" />
                        </div>
                        <div className="flex gap-4">
                            <textarea type="text" placeholder="Message" className="border-2 border-gray-400 rounded-lg bg-transparent py-2 px-6 w-[700px]" />
                        </div>
                        <div>
                            <button className="btn btn-outline btn-info">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact