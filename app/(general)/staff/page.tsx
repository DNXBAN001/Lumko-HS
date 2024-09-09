import Image from "next/image";

export default function Staff() {
    
    return (
        <div className="main-body">
            <div>
             <Image src="/staff-reduced.jpg" width={1910} height={700} priority={true} alt="banner-image"/>
            </div>
            <div className="staff-wrapper mt-12 w-5/6 sm:w-4/5 m-auto">
                <h1 className="mt-12 text-3xl text-center">Meet Our Academic Staff</h1>
                <div className="staff-photos-container mt-12">
                    <div className="cards-wrapper sm:flex sm:flex-wrap sm:justify-between mt-6">
                        <div className="staff-card mt-6">
                            <Image src="/staff/staff-headshot.jpg" width={340} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Ms. C. Magerman</p>
                        </div>
                        <div className="staff-card mt-6">
                            <Image src="/staff/staff-headshot.jpg" width={340} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Ms. C. Magerman</p>
                        </div>
                        <div className="staff-card mt-6">
                            <Image src="/staff/staff-headshot.jpg" width={340} height={300} className="teacher-img" alt="staff-photo" />
                            <p>Ms. C. Magerman</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}