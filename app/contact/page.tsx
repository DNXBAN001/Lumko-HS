import Image from "next/image";

export default function Contact() {
    
    return (
        <div className="main-body">
            <div>
                <Image src="/banner-3-reduced.jpg" width={1910} height={600} priority={true} alt="banner-image"/>
            </div>
            <div className="contact-container w-4/5 m-auto mt-12 pb-16">
                <h1 className="text-3xl font-medium text-center">Contact us</h1>
                <div className="contact mt-12">
                    <p className="text-center mt-12">To contact us, you can either visit the school, call or send a 
                        message to the following contact details
                    </p>
                    <div className="mt-12">
                        <div className="mt-3">
                            <h3>Phone:</h3>
                            <p>043 741 1075</p>
                        </div>
                        <div className="mt-3">
                            <h3>Email:</h3>
                            <p>lumkohigh@gmail.com</p>
                        </div>
                        <div className="mt-3">
                            <h3>Physical Address:</h3>
                            <p>2A Longacre Rd, Amalinda, East London, 5247</p>
                        </div>
                        <div className="mt-3">
                            <h3>Postal Address:</h3>
                            <p>Po Box 1657, Oxford Street, East London, , 5200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}