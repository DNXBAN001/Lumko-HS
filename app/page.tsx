import Image from "next/image";

export default function Home() {
  return (
    <div className="main-body">
      <div>
          <Image src="/banner-1.jpg"
              width={1910}
              height={600}
              priority={true}
              alt="banner-image"
          />
      </div>
    </div>
  )
}
