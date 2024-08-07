import Image from "next/image";

export default function Contact() {
    
    return (
        <div className="main-body">
            <div>
                <Image src="/banner-3-reduced.jpg"
                    width={1910}
                    height={600}
                    priority={true}
                    alt="banner-image"
                />
            </div>
        </div>
    )
}