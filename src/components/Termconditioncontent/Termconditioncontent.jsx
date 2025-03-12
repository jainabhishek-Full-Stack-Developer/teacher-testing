import Homefooter from "../Homecontent/Homefooter";
import Homeheader from "../Homecontent/Homeheader";
import styles from "./page.module.css";

const Termconditioncontent = () => {
    return (
        <>
            <Homeheader />
            <main>
                <div className={styles.imageBox} >
                    <div className={styles.privacyPolicyBgContainer}>
                        <div className="mt-10">
                            <h1 className="text-3xl font-bold mb-4 text-white">Term & Condition</h1>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto py-10 px-4">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
                        <p className="text-gray-700 mt-2">
                            Welcome to our Teacher Panel. These Terms & Conditions govern your use of the platform.
                            By accessing or using our services, you agree to comply with these terms.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">2. Eligibility</h2>
                        <p className="text-gray-700 mt-2">
                            To use our platform, you must be a registered teacher and agree to abide by the rules
                            and policies set forth by us.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">3. Account Responsibilities</h2>
                        <p className="text-gray-700 mt-2">
                            You are responsible for maintaining the confidentiality of your account and password.
                            Any unauthorized use must be reported immediately.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">4. Acceptable Use</h2>
                        <p className="text-gray-700 mt-2">
                            By using our platform, you agree NOT to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Post or share illegal or harmful content</li>
                            <li>Use the platform for fraudulent or unauthorized purposes</li>
                            <li>Violate intellectual property rights of others</li>
                            <li>Attempt to disrupt platform security or functionality</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">5. Content Ownership</h2>
                        <p className="text-gray-700 mt-2">
                            Any course materials or content you upload remain your property. However, by uploading content,
                            you grant us a license to use, distribute, and display it for educational purposes.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">6. Payment & Subscription</h2>
                        <p className="text-gray-700 mt-2">
                            If applicable, subscription fees must be paid on time. Failure to do so may result in
                            restricted access or termination of services.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">7. Termination</h2>
                        <p className="text-gray-700 mt-2">
                            We reserve the right to suspend or terminate your account if you violate these terms
                            or engage in misconduct.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">8. Liability Limitation</h2>
                        <p className="text-gray-700 mt-2">
                            We are not responsible for any direct or indirect damages resulting from the use of our platform.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">9. Changes to Terms</h2>
                        <p className="text-gray-700 mt-2">
                            We may update these terms from time to time. Continued use of our platform signifies
                            your acceptance of any changes.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
                        <p className="text-gray-700 mt-2">
                            If you have any questions regarding these Terms & Conditions, contact us at:
                        </p>
                        <p className="text-gray-700 mt-2 font-semibold">support@[yourdomain].com</p>
                    </div>


                </div>
            </main>
            <Homefooter />
        </>
    )
}

export default Termconditioncontent;
