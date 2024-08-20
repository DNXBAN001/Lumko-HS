import Image from "next/image";

export default function Staff() {
    
    return (
        <div className="main-body">
            <div>
             <Image src="/staff-reduced.jpg" width={1910} height={700} priority={true} alt="banner-image"/>
            </div>
            <div className="staff-wrapper mt-12 w-4/5 m-auto">
                <h1 className="mt-12 text-3xl text-center">Meet our academic staff</h1>
                <div className="staff-photos-container mt-12">
                    <div className="cards-wrapper flex justify-between mt-12">
                        <div className="staff-card">
                            <Image src="/staff-photo.jpg" width={300} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Staff Name</p>
                        </div>
                        <div className="staff-card">
                            <Image src="/staff-photo.jpg" width={300} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Staff Name</p>
                        </div>
                        <div className="staff-card">
                            <Image src="/staff-photo.jpg" width={300} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Staff Name</p>
                        </div>
                    </div>
                    {/* <div className="cards-wrapper flex justify-between mt-12">
                        <div className="staff-card">
                            <Image src="/staff-photo.jpg" width={300} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Staff Name</p>
                        </div>
                        <div className="staff-card">
                            <Image src="/staff-photo.jpg" width={300} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Staff Name</p>
                        </div>
                        <div className="staff-card">
                            <Image src="/staff-photo.jpg" width={300} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Staff Name</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}