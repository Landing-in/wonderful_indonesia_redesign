import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <HeroSection/>
            <CarouselSection/>
            <Footer/>
        </div>
    );
}
