import {menuLink} from "@/components/Navbar";
import {FaAlignJustify} from "react-icons/fa";
import colors from "tailwindcss/colors";

export default function MobileMenu() {

    return (
        <nav className="p-4">
            <button>
                <FaAlignJustify size={30}/>
            </button>
            <div className="hidden">
                <ul className="flex flex-col space-y-4 text-xl">
                    {
                        menuLink.map(function (menu) {
                            return (
                                <li><a href={menu.link}>{menu.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}