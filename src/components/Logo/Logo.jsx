import Link from 'next/link';
import { companyName } from "../../constants/constants";

const Logo = () => {
    return (
        <div>
            <Link href="/"><span className="text-orange-500 font-bold uppercase text-2xl">{companyName}</span></Link>
        </div>
    )
}

export default Logo;
