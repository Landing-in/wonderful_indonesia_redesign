import React from 'react';
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";


export const menuLink = [
    {name: "Home", link: "/home"},
    {name: "Destination", link: "/home"},
    {name: "About", link: "/home"},
    {name: "Event", link: "/home"},
]

function Navbar() {
    return (
        <nav className="max-w-[1440px] p-4 mx-auto flex justify-between items-center overflow-hidden">
            {/*LOGO*/}
            <Logo/>
            {/*<MobileMenu/>*/}
            <div>
                <ul className="flex justify-between space-x-10 font-semibold text-lg">
                    {
                        menuLink.map((menu) => {
                            return (
                                <li>
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