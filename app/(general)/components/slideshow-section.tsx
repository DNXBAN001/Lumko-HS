import Image from "next/image";

export default function SlideshowSection() {
    return (
        <section className="slideshow-section">
        <h1 className="text-3xl pt-10 text-center">What We Offer</h1>
        <div className="slideshow-wrapper w-4/5 m-auto text-center mt-10">
          <p className="mb-10">We are a multifaceted school with a wide range of extracurricular activities and amenities.</p>
          <div className="flex flex-wrap justify-evenly pb-10">
            <div className="">
                <Image src="/netball.jpg" width={300} height={200} alt="img"/>
                <p>Netball</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Image src="/rugby.jpg" width={300} height={200} alt="img"/>
              <p>Rugby</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Image src="/soccer.jpg" width={300} height={200} alt="img"/>
              <p>Soccer</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Image src="/tennis.jpg" width={300} height={200} alt="img"/>
              <p>Tennis</p>
            </div>
            {/* <div>
              <Image src="/computer-lab.jpg" width={300} height={200} alt="img"/>
              <p>Soccer</p>
            </div>
            <div>
              <Image src="/school-hall.jpg" width={300} height={200} alt="img"/>
              <p>Soccer</p>
            </div> */}
          </div>
        </div>
      </section>
    )
}
