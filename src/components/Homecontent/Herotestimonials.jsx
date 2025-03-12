import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"

const Herotestimonials = () => {
    return (
        <section id="successstory">
            <div className="text-center mb-20 mt-16">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Teacher Stories
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    Gain insights from our dedicated educators who inspire and impact lives every day
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#ff5c00] inline-flex" />
                </div>
            </div>

            <Carousel className="relative">
                <CarouselContent>
                    <CarouselItem >
                        <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
                            <Card className="p-6 sm:p-10 w-full max-w-3xl bg-orange-100/20 shadow-lg rounded-xl">
                                <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
                                    {/* User Image */}
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex-shrink-0">
                                        <img src="/images/user.jpg" alt="User" className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" />
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                                            <div>
                                                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Dr. Ananya Sharma</h4>
                                                <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                                                    Senior Mathematics Professor, Delhi University
                                                </p>
                                            </div>
                                            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5c00] mt-4 md:mt-0" />
                                        </div>

                                        {/* Quote Section */}
                                        <blockquote className="mt-4 sm:mt-6 text-sm sm:text-base italic text-gray-700 leading-relaxed">
                                            “This platform has revolutionized my teaching experience. The interactive tools, seamless content
                                            management, and real-time engagement have allowed me to connect with students beyond geographical limits.
                                            It’s truly a game-changer for educators!”
                                        </blockquote>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                    </CarouselItem>
                    <CarouselItem >
                        <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
                            <Card className="p-6 sm:p-10 w-full max-w-3xl bg-orange-100/50 shadow-lg rounded-xl">
                                <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
                                    {/* User Image */}
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex-shrink-0">
                                        <img src="/images/user.jpg" alt="User" className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" />
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                                            <div>
                                                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Dr. Ananya Sharma</h4>
                                                <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                                                    Senior Mathematics Professor, Delhi University
                                                </p>
                                            </div>
                                            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5c00] mt-4 md:mt-0" />
                                        </div>

                                        {/* Quote Section */}
                                        <blockquote className="mt-4 sm:mt-6 text-sm sm:text-base italic text-gray-700 leading-relaxed">
                                            “This platform has revolutionized my teaching experience. The interactive tools, seamless content
                                            management, and real-time engagement have allowed me to connect with students beyond geographical limits.
                                            It’s truly a game-changer for educators!”
                                        </blockquote>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
                            <Card className="p-6 sm:p-10 w-full max-w-3xl bg-orange-100/50 shadow-lg rounded-xl">
                                <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
                                    {/* User Image */}
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 flex-shrink-0">
                                        <img src="/images/user.jpg" alt="User" className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" />
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                                            <div>
                                                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Dr. Ananya Sharma</h4>
                                                <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                                                    Senior Mathematics Professor, Delhi University
                                                </p>
                                            </div>
                                            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff5c00] mt-4 md:mt-0" />
                                        </div>

                                        {/* Quote Section */}
                                        <blockquote className="mt-4 sm:mt-6 text-sm sm:text-base italic text-gray-700 leading-relaxed">
                                            “This platform has revolutionized my teaching experience. The interactive tools, seamless content
                                            management, and real-time engagement have allowed me to connect with students beyond geographical limits.
                                            It’s truly a game-changer for educators!”
                                        </blockquote>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                {/* Custom Navigation Buttons */}
                <CarouselPrevious className="absolute left-32 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-32 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                </CarouselNext>
            </Carousel>
        </section>
    )
}

export default Herotestimonials;
