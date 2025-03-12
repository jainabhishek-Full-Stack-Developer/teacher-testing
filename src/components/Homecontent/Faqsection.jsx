import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
    return (
        <section id="faq" className="py-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto  mt-16">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                        Find answers to common questions about teaching on our platform.
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-[#ff5c00] inline-flex" />
                    </div>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium text-gray-900 ">
                            How do I register as a teacher on the platform?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                To register as a teacher, follow these steps:
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]">
                                <li>Visit the Teacher Registration page.</li>
                                <li>Fill in your details, including name, email, phone number, and subject expertise.</li>
                                <li>Upload the required documents (ID proof, qualification certificates, etc.).</li>
                                <li>Submit your application and wait for approval from the admin team.</li>
                            </ul>
                            <p className="leading-7 [&:not(:first-child)]">
                                Once approved, you'll receive an email with login credentials to access your dashboard.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium text-gray-900">
                            What documents are required for verification?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                To complete your onboarding, you need to submit:
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]">
                                <li>A government-issued ID (Aadhar Card, Passport, or Driving License).</li>
                                <li>Educational qualification certificates.</li>
                                <li>Proof of teaching experience (if applicable).</li>
                                <li>Bank details for payments (optional at the time of registration).</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium text-gray-900">
                            How long does the verification process take?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                The verification process usually takes 24 to 48 hours. If any additional details are required, you will be notified via email.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium text-gray-900">
                            Can I teach multiple subjects?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                Yes, you can select multiple subjects based on your qualifications and expertise. The admin team will review and approve the subjects you choose.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-medium text-gray-900">
                            Is there a fee to join the platform as a teacher?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                No, registering as a teacher is completely free. However, the platform takes a small commission from student enrollments.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-medium text-gray-900">
                            How do I receive payments for my courses?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                Payments are processed on a monthly basis through bank transfer or UPI. You can track your earnings from the Earnings Section in your dashboard.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-lg font-medium text-gray-900">
                            Can I schedule live classes?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                            <p className="leading-7 [&:not(:first-child)]">
                                Yes, you can schedule live classes through the platform:
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]">
                                <li>Go to the Live Classes section in your dashboard.</li>
                                <li>Select the date and time.</li>
                                <li>Share the live class link with enrolled students.</li>
                            </ul>
                            <p className="leading-7 [&:not(:first-child)]">
                                You can also record and upload sessions for students who miss the live class.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
};

export default FaqSection;
