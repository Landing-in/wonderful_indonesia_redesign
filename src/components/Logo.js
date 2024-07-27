import Image from "next/image";
import LogoNav from "/public/assets/logo.png"

export default function Logo(){
    return (
        <div className="md:w-full cursor-pointer transition-all hover:animate-spin duration-500 hover:bg-primary/50">
            <Image src={LogoNav} alt="logo"/>
        </div>
    )
}