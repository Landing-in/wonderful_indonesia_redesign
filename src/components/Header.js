import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import {useMediaQuery} from "../../utils/media_query";

export default function Header() {
    const isMobile=useMediaQuery();
    return (
        <header>
            {isMobile ? (
                <MobileMenu/>
            ) : <Navbar/>}
        </header>
    );
}