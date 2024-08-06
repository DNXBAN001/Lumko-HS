import Image from "next/image"

export default function About() {
    
    return (
        <div className="main-body">
            <div>
                <Image src="/banner-2.jpg"
                    // width={4608}
                    // height={3072}
                    width={1910}
                    height={600}
                    priority={true}
                    alt="banner-image"
                />
            </div>
        </div>
    )
}
