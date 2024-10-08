import Image from "next/image";
import WelcomeSection from "./components/welcome-section";
import ValuesSection from "./components/values-section";
import SlideshowSection from "./components/slideshow-section";

export default function Home() {

  const slideImages = ["/netball.jpg", "/rubgy.jpg", "/school-hall.jpg", "/computer-lab.jpg", "/soccer.jpg", "/tennis.jpg"]

  return (
    <div className="main-body">
      <div>
          <Image src="/banner-1-reduced.jpg" width={1910} height={700} priority={true} alt="banner-image"/>
      </div>
      <WelcomeSection />
      <ValuesSection />
      <SlideshowSection />
    </div>
  )
}
