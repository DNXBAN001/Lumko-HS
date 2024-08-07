import Image from "next/image";

export default function News() {
    
    return (
        <div className="main-body">
            <div>
                <Image src="/banner-5-reduced.jpg"
                    width={1910}
                    height={600}
                    priority={true}
                    alt="banner-image"
                />
            </div>
        </div>
    )
}