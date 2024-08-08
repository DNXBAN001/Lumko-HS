import Image from "next/image"

export default function About() {
    
    return (
        <div className="main-body">
            <div className="">
                <Image src="/banner-2-reduced.jpg"
                    width={1910}
                    height={600}
                    priority={true}
                    alt="banner-image"
                />
            </div>
            <div className="about-container w-4/5 m-auto mt-12">
                <h1 className="text-3xl font-medium text-center">About us</h1>
                <div className="about-wrapper mt-12 flex justify-between items-center pt-12">
                    <div className="">
                        <Image src="/logo-large.png" width={300} height={250} alt="logo-img" /> 
                    </div>
                    <div className="about-content w-3/5">
                        <p>
                            Lumko High School is a public secondary school located at 2A Longacre Rd, 
                            Amalinda, East London, 5247 in Eastern Cape Province. The school offers Grade 8-12 
                            education and has approximately 1059 students. 
                            It is known for:
                        </p>
                        <ul className="unordered-list mt-4">
                            <li className="ml-8">Outstanding Academics</li>
                            <li className="ml-8">Cultural Diversity</li>
                            <li className="ml-8">Dedicated Educators</li>
                            <li className="ml-8">Modern Infrastructure</li>
                        </ul>
                        <p className="mt-4">Since its inception, the school has been a welcoming environment for pupils from all 
                            over the Eastern Cape and beyond, celebrating and embracing ethnic and cultural variety.</p>
                    </div>
                </div>
                <div className="mision-vision-values-wrapper mt-12 flex justify-around pb-16">
                    <div className="mission-wrapper w-3/6">
                        <h3 className="text-xl">Mission</h3>
                        <ul className="unordered-list mt-3">
                            <li className="ml-5">Create a positive learning environment that will ensure the 
                                provision of quality education.</li>
                            <li className="ml-5">Instill self-discipline to our learners so that they can become
                                responsible members of their communities and the society as a whole.</li>
                            <li className="ml-5">Promote a sense of pride and ownership of the school to all stakeholders</li>
                            <li className="ml-5">Promote a sense of respect for one another.</li>
                            <li className="ml-5">Help our learners to realise and develop their skills to their full potential.</li>
                            <li className="ml-5">Encourage a positive attitude towards striving for the achievements of our goals.</li>
                            <li className="ml-5">Prepare our learners for work life and adult life.</li>
                            <li className="ml-5">Make the school a comfortable workplace for educators.</li>
                            <li className="ml-5">Develop partnerships for all stakeholders.</li>
                            <li className="ml-5">Preserve and promote all that constitutes the pride of our beloved institution.</li>
                        </ul>
                    </div>
                    <div className="vision-mission-wrapper w-2/6">
                        <div className="vision-wrapper">
                            <h3 className="text-xl">Vision</h3>
                            <p className="mt-3">To be a centre of educational excellence where refined educators create an effective 
                                learning environment in which learners will develop into balanced and responsible 
                                citizens that will contribute meaningfully in the advancement of their communities
                            </p>
                        </div>
                        <div className="about-values-wrapper mt-8">
                            <h3 className="text-xl">Values</h3>
                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                 nisi ut 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
