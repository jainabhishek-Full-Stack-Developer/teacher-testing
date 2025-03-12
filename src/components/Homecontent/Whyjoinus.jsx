import { Clock, Globe, CircleDollarSign, VideoOff, Rocket, Waypoints } from 'lucide-react';

const Whyjoinus = () => {
    return (
        <section id="whychooseus" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                        WHY JOIN US
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                        Unlock global opportunities, teach on your terms, and earn effortlessly with our seamless teaching platform
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-[#ff5c00] inline-flex" />
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200/60 text-[#ff5c00] mb-5 flex-shrink-0">
                            <Globe size={35} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Teach Students Worldwide
                            </h2>
                            <p className="leading-relaxed text-base">
                                Expand your reach beyond borders and connect with students globally. No geographical limitations—teach from anywhere!
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200/60 text-[#ff5c00] mb-5 flex-shrink-0">
                            <Clock size={35} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Flexible Schedule
                            </h2>
                            <p className="leading-relaxed text-base">
                                Set your own hours and teach at your convenience. Whether part-time or full-time, you have complete control over your teaching schedule
                            </p>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200/60 text-[#ff5c00] mb-5 flex-shrink-0">
                            <CircleDollarSign size={35} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Earn More, Your Way
                            </h2>
                            <p className="leading-relaxed text-base">
                                Competitive earnings with no income limits. Get paid for live classes, tutoring, and interactive sessions based on your expertise
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200/60 text-[#ff5c00] mb-5 flex-shrink-0">
                            <VideoOff size={35} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                No Need to Create Courses
                            </h2>
                            <p className="leading-relaxed text-base">
                                Unlike other platforms, you don’t need to spend hours recording courses. Simply go live, engage with students, and start earning instantly
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200/60 text-[#ff5c00] mb-5 flex-shrink-0">
                            <Rocket size={35} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Hassle-Free Setup
                            </h2>
                            <p className="leading-relaxed text-base">
                                No complex tech setup needed! Just sign up, set your availability, and start teaching. We handle the rest
                            </p>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-200/60 text-[#ff5c00] mb-5 flex-shrink-0">
                            <Waypoints size={35} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                Engage with a Global Learning Community
                            </h2>
                            <p className="leading-relaxed text-base">
                                Join a network of passionate educators, share insights, and grow your impact in a supportive teaching environment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Whyjoinus;
