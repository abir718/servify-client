import Contact from './HomeContents/Contact'
import Others from './HomeContents/Others'

function AboutUs() {
    return (
        <div>
                        <div className="w-4/5 mx-auto my-6">
            <h1 className='text-center text-3xl font-bold py-3'>Frequently Asked Questions</h1>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-base">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-medium text-xl">How do I book a service?</div>
                    <div className="collapse-content text-lg">Browse available services, select the one you need, and click Book Now to schedule an appointment.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-base">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium text-xl">Can I reschedule or cancel a booking?</div>
                    <div className="collapse-content text-lg">Yes, go to My Bookings in your dashboard to reschedule or cancel a service up to 24 hours in advance.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-base">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium text-xl">Are your service providers verified?</div>
                    <div className="collapse-content text-lg">Yes, all service providers go through a strict verification and background check process before being listed.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-base">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium text-xl">What payment methods do you accept?</div>
                    <div className="collapse-content text-lg">We accept credit/debit cards, UPI, and popular digital wallets. All transactions are secured.</div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-base">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-medium text-xl">Do you offer services in my area?</div>
                    <div className="collapse-content text-lg">Enter your location in the search bar or profile settings to see available services near you.</div>
                </div>
            </div>
            <Contact></Contact>
            <Others></Others>


        </div>
    )
}

export default AboutUs