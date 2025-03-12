import styles from "./page.module.css";

const Verticaltimeline = () => {
    return (

        <section id="howitworks" className={styles.verticalTimelineContainer}>
            <div className="text-center mb-16 mt-14">
                <h1 className="text-2xl sm:text-3xl  font-semibold text-gray-900 mb-3">
                    How It Works
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    Get started effortlessly with our platform in just four simple steps and begin your journey as a global educator.
                </p>
                <div className="flex mt-5 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#ff5c00]" />
                </div>
            </div>

            <div>
                <div className={styles.psSectionContent}>
                    <div className={`flex flex-col md:flex-row-reverse ${styles.psBlockVendorMilestone}`}>
                        <div>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight"> Sign Up & Create Your Profile</h3>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 mt-6 text-gray-700">
                                <li>Register with Ease – Sign up using your email and complete a quick onboarding process.</li>
                                <li>Set Up Your Teaching Profile – Add details about your expertise, experience, and preferred subjects.</li>
                                <li>Verification & Approval – Our team reviews your profile to ensure quality teaching standards.</li>
                            </ul>
                        </div>
                        <div className={`hidden md:block md:w-1/2 p-6 ${styles.psBlockRight} ml-72`}>
                            <img src="/images/login.svg" alt="login" className="w-full h-auto" />
                        </div>
                        <div className={`${styles.psBlockNumber} `}>
                            <span>1</span>
                        </div>
                    </div>
                    <div className={`${styles.psBlockVendorMilestone}`}>
                        <div className={`hidden md:block md:w-1/2 p-6 ${styles.psBlockRight}`}>
                            <img src="/images/calendar.svg" alt="calendar" className="w-full h-auto" />
                        </div>
                        <div className={`ml-10`}>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Schedule & Start Live Classes</h3>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 mt-6 text-gray-700">
                                <li>Flexible Scheduling – Set your own class timings based on your availability.</li>
                                <li>Interactive Live Sessions – Conduct real-time classes with students across the world.</li>
                                <li>Advanced Teaching Tools – Use features like screen sharing, whiteboards, and chat for engaging sessions.</li>
                            </ul>
                        </div>
                        <div className={`${styles.psBlockNumber} flex justify-center items-center w-12 h-12 bg-gray-800 text-white rounded-full text-xl font-bold`}>
                            <span>2</span>
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row items-center my-8 ${styles.psBlockVendorMilestone}`}>
                        <div className={`${styles.psBlockLeft} md:w-1/2 p-6`}>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Engage with Students & Teach Globally</h3>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 mt-6 text-gray-700">
                                <li>Global Student Reach – Connect with students from different countries and cultures.</li>
                                <li>Collaborative Learning – Engage in Q&A sessions, discussions, and assignments.</li>
                                <li>Supportive Community – Get guidance from fellow educators and platform support.</li>
                            </ul>
                        </div>
                        <div className={`hidden md:block md:w-1/2 p-6 ${styles.psBlockRight}`}>
                            <img src="images/teach.svg" alt="Engage with Students & Teach Globally" className="w-full h-auto" />
                        </div>
                        <div className={`${styles.psBlockNumber} flex justify-center items-center w-12 h-12 bg-gray-800 text-white rounded-full text-xl font-bold`}>
                            <span>3</span>
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row-reverse items-center my-8 ${styles.psBlockVendorMilestone}`}>
                        <div className={`hidden md:block md:w-1/2 p-6 ${styles.psBlockRight}`}>
                            <img src="images/earn.svg" alt="Get Paid & Grow Your Teaching Career" className="w-full h-auto" />
                        </div>
                        <div className={`${styles.psBlockLeft} p-6 ml-0 md:ml-60`}>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Get Paid & Grow Your Teaching Career</h3>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 mt-6 text-gray-700">
                                <li>Seamless Payouts – Receive payments securely and on time.</li>
                                <li>Earn More with Referrals – Invite teachers and earn extra income.</li>
                                <li>Expand Your Reach – Build a strong reputation and grow your student base over time.</li>
                            </ul>
                        </div>

                        <div className={`${styles.psBlockNumber} flex justify-center items-center w-12 h-12 bg-gray-800 text-white rounded-full text-xl font-bold`}>
                            <span>4</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Verticaltimeline
