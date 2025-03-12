import Homefooter from "../Homecontent/Homefooter";
import Homeheader from "../Homecontent/Homeheader";
import styles from "./page.module.css";

const Pricepolicycontent = () => {
    return (
        <>
            <Homeheader />
            <main>
                <div className={styles.imageBox}>
                    <div className={styles.privacyPolicyBgContainer}>
                        <div className="mt-10">
                            <h1 className="text-3xl font-bold mb-4 text-white">Price Policy</h1>
                        </div>
                    </div>
                </div>
                <div className="mx-auto py-10 px-4">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
                        <p className="text-gray-700 mt-2">
                            This Pricing & Earnings Policy outlines how teachers earn from our platform,
                            payment structures, deductions, and applicable fees. By using our services,
                            you agree to comply with this policy.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">2. Teacher Earnings</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Teachers earn revenue based on class enrollments, subscriptions, or per-session payments.</li>
                            <li>Earnings are credited to the teacher’s account after successful completion of a class/session.</li>
                            <li>Teachers may set their own course prices (subject to platform minimums and maximums).</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">3. Platform Commission & Deductions</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>The platform charges a service fee on each transaction (percentage-based or fixed fee).</li>
                            <li>Payment gateway fees may apply depending on the payment method.</li>
                            <li>Taxes and other applicable deductions (e.g., government levies) will be applied where required.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">4. Payment Schedule</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Teacher earnings are processed on a **weekly/monthly** payout schedule.</li>
                            <li>Minimum payout threshold must be met before withdrawal.</li>
                            <li>Payments are made via **bank transfer, PayPal, or other available methods**.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">5. Refunds & Chargebacks</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>If a student requests a refund, the refunded amount may be deducted from the teacher’s balance.</li>
                            <li>Chargeback fees from payment processors will be deducted from teacher earnings.</li>
                            <li>Disputes regarding refunds can be addressed through the platform’s support team.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">6. Taxes & Compliance</h2>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Teachers are responsible for their own tax reporting and compliance.</li>
                            <li>Where applicable, the platform may deduct **Withholding Tax (TDS)** before payout.</li>
                            <li>Teachers may need to submit tax documents for verification.</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6">7. Changes to Policy</h2>
                        <p className="text-gray-700 mt-2">
                            We reserve the right to modify the pricing and earnings structure at any time.
                            Teachers will be notified of any changes in advance.
                        </p>

                        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
                        <p className="text-gray-700 mt-2">
                            If you have any questions regarding earnings and deductions, reach out to us at:
                        </p>
                        <p className="text-gray-700 mt-2 font-semibold">support@[yourdomain].com</p>
                    </div>
                </div>

            </main>
            <Homefooter />
        </>
    )
}

export default Pricepolicycontent;
