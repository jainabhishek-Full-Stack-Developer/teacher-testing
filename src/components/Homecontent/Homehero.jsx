import styles from "./page.module.css";



const Homehero = () => {
    return (
        <section className={styles.heroSectionBgContainer}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {/* Left Content Section */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-14 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl font-bold text-white leading-tight mb-6 max-w-3xl">
                        Join Our Global Teaching Community
                        <br className="hidden lg:inline-block" />
                        Teach from Anywhere!
                    </h1>
                    <p className="mb-6 text-lg text-gray-200 leading-relaxed max-w-2xl">
                        Empower students worldwide through live interactive classes and maximize your earnings—all from the comfort of your home.
                    </p>
                    {/* Call-to-Action Button */}
                    <div className="flex justify-center md:justify-start">
                        <button className="inline-flex items-center text-white bg-[#ff5c00] hover:bg-[#ff5c00] transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-lg text-lg font-semibold shadow-lg">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Homehero;