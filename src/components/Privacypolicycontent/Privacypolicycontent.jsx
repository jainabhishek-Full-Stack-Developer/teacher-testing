import Homefooter from "../Homecontent/Homefooter";
import Homeheader from "../Homecontent/Homeheader";
import styles from "./page.module.css";

const Privacypolicycontent = () => {
    return (
        <>
            <Homeheader />
            <main>
                <div className={styles.imageBox} >
                    <div className={styles.privacyPolicyBgContainer}>
                        <div className="mt-10">
                            <h1 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h1>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto py-10 px-4">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
                        <p className="text-gray-700 mt-2">
                            Welcome to our Teacher Panel. Your privacy is important to us. This Privacy Policy
                            explains how we collect, use, disclose, and safeguard your information when you use our platform.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
                        <p className="text-gray-700 mt-2">
                            We may collect personal and non-personal information, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Name, email address, and contact details</li>
                            <li>Profile information, including educational background</li>
                            <li>Course materials and content you upload</li>
                            <li>Analytics data, including log and device information</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
                        <p className="text-gray-700 mt-2">
                            Your data is used to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Provide and manage your access to the Teacher Panel</li>
                            <li>Improve platform functionality and user experience</li>
                            <li>Ensure compliance with our terms and policies</li>
                            <li>Send important updates and notifications</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">4. Sharing Your Information</h2>
                        <p className="text-gray-700 mt-2">
                            We do not sell or rent your personal data. However, we may share it with:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Service providers assisting in platform operations</li>
                            <li>Legal authorities when required by law</li>
                            <li>Business partners for improving services</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
                        <p className="text-gray-700 mt-2">
                            We take appropriate measures to protect your data from unauthorized access,
                            alteration, or disclosure.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
                        <p className="text-gray-700 mt-2">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Access, update, or delete your personal information</li>
                            <li>Opt-out of certain data processing activities</li>
                            <li>Request a copy of your data</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">7. Changes to This Policy</h2>
                        <p className="text-gray-700 mt-2">
                            We may update this Privacy Policy from time to time. We will notify you about
                            significant changes through email or platform notifications.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
                        <p className="text-gray-700 mt-2">
                            If you have any questions regarding this Privacy Policy, contact us at:
                        </p>
                        <p className="text-gray-700 mt-2 font-semibold">support@[yourdomain].com</p>

                    </div>

                </div>
            </main>
            <Homefooter />
        </>
    )
}

export default Privacypolicycontent;
