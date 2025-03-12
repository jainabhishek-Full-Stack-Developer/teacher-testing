import Link from "next/link";

const Homefooter = () => {
    return (
        <footer className="text-gray-600 body-font bg-black p-5">
            <div className="flex pt-3 flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3 sm:gap-0">
                {/* Logo Section */}
                <div>
                    <Link href="/" className="flex title-font font-medium items-center justify-center sm:justify-start text-white">
                        <span className="ml-3 text-xl font-semibold text-[#ff5c00]">Vatoto</span>
                    </Link>
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap justify-center sm:justify-start">
                    <Link href="/privacy-policy" className="text-gray-200/70 mr-3 sm:mr-5 hover:text-white">Privacy Policy</Link>
                    <Link href="/term-condition" className="text-gray-200/70 mr-3 sm:mr-5 hover:text-white">Terms & Conditions</Link>
                    <Link href="/pricing-policy" className="text-gray-200/70 hover:text-white">Pricing Policy</Link>
                </div>

                {/* Copyright Text */}
                <p className="text-white text-sm">
                    © 2024 - {new Date().getFullYear()} <span className="font-semibold">Vatoto</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Homefooter;
