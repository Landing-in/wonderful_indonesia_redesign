import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/Carousel";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <HeroSection/>
            <CarouselSection/>
        </div>
    );
}
