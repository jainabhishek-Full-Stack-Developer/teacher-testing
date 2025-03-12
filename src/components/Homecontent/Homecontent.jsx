import Homeheader from "./Homeheader";
import Homefooter from "./Homefooter";
import Homehero from "./Homehero";
import Faqsection from "./Faqsection";
import Herotestimonials from "./Herotestimonials";
import Verticaltimeline from "./Verticaltimeline";
import Whyjoinus from "./Whyjoinus";
import Homejoinus from "./Homejoinus";

const Homecontent = () => {
    return (
        <>
            <Homeheader />

            <Homehero />
            <Whyjoinus />
            <Verticaltimeline />
            <Homejoinus />
            <Herotestimonials />
            <Faqsection />
            <Homefooter />
        </>
    )
}

export default Homecontent;
