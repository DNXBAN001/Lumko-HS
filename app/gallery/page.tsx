import Image from "next/image";

export default function Gallery() {
    
    return (
        <div className="main-body">
            <div><Image src="/banner-5-reduced.jpg" width={1910} height={700} priority={true} alt="banner-image"/></div>
        </div>
    )
}