import Image from "next/image";
import LogoNav from "/public/assets/logo.svg"

export default function Logo(){
    return (
        <div className="md:w-full cursor-pointer transition-all duration-500">
            <Image src={LogoNav} priority={true} alt="logo" width={200} height={200}/>
        </div>
    )
}