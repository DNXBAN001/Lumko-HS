import Image from "next/image";

export default function Gallery() {
    
    return (
        <div className="main-body">
            <div><Image src="/banner-5-reduced.jpg" width={1910} height={700} priority={true} alt="banner-image"/></div>
            <div className="gallery-container mt-12 mb-12 w-4/5 m-auto">
                <h1 className="text-3xl text-center">Our Gallery</h1>
                <div className="gallery-year-filters mt-12 flex pt-12">
                    <div className="filter-wrapper px-3 py-2"><h3>2024</h3></div>
                    <div className="filter-wrapper px-3 py-2 ml-3"><h3>2023</h3></div>
                    <div className="filter-wrapper px-3 py-2 ml-3"><h3>2022</h3></div>
                </div>
                <div className="gallery-category-filters flex flex-wrap mt-6">
                    <div className="filter-wrapper px-3 py-2"><p>All</p></div>
                    <div className="filter-wrapper px-3 py-2 ml-3"><p>Sports</p></div>
                    <div className="filter-wrapper px-3 py-2 ml-3"><p>Heritage</p></div>
                    <div className="filter-wrapper px-3 py-2 ml-3"><p>Staff</p></div>
                    <div className="filter-wrapper px-3 py-2 ml-3"><p>Other</p></div>
                </div>
                <div className="gallery-wrapper mt-12 flex justify-between flex-wrap items-center">
                    <div>
                        <Image src="/staff-photo.jpg" width={350} height={300} className="teacher-img" alt="img" />
                        <p>Description</p>
                    </div>
                    <div>
                        <Image src="/staff-photo.jpg" width={350} height={300} className="teacher-img" alt="img" />
                        <p>Description</p>
                    </div>
                    <div>
                        <Image src="/staff-photo.jpg" width={350} height={300} className="teacher-img" alt="img" />
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}