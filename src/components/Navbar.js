import React from 'react';
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";


export const menuLink = [
    {name: "Home", link: "/"},
    {name: "Destination", link: "/destination"},
    {name: "About", link: "/home"},
    {name: "Event", link: "#event"},
]

function Navbar() {
    return (
        <nav className="md:max-w-[1440px] p-4 mt-5 mx-auto flex justify-between items-center overflow-hidden">
            {/*LOGO*/}
            <Logo/>
            {/*<MobileMenu/>*/}
            <div>
                <ul className="flex justify-between space-x-10 font-semibold text-lg">
                    {
                        menuLink.map((menu) => {
                            return (
                                <li key={menu.name} className="hover:text-primary transition-all ease-in duration-300">
                                    <a href={menu.link}>{menu.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;