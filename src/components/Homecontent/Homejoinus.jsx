import Link from "next/link";

const Homejoinus = () => {
    return (
        <section className="bg-[#0e0e14] text-white py-16 px-6 sm:px-8 lg:px-12">
            <div className="container mx-auto flex flex-col items-center text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                    Start Teaching & Inspire Students Worldwide!
                </h2>
                <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6">
                    Join our global network of educators, conduct live interactive classes, and maximize your impact.
                    Teach from anywhere and shape the future of learning!
                </p>
                <div className="flex justify-center">
                    <Link href="/login" className="text-white bg-[#ff5c00] font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#ff5c00] focus:ring-4  transition-all duration-300 ease-in-out">
                        Get Started Now
                    </Link>
                </div>
            </div>
        </section>


    )
}

export default Homejoinus;
