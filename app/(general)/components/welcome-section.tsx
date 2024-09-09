import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
        <div className="welcome-heading-wrapper text-center mt-12 ">
          <h1 className="welcome-heading text-3xl font-medium">Welcome to Lumko High School</h1>
        </div>
        <div className="principal-welcome-wrapper w-4/5 flex m-auto justify-between items-center mt-12 p-12">
          <div className="principal-image">
            <h3 className="text-xl text-center p-3">Principal</h3>
            <Image src="/principal.jpg"
              width={200}
              height={200}
              alt="principal-image"
              className="principal-image"
            />
          </div>
          <div className="welcome-message w-3/5 mt-3">
            <p>Lumko High School is a family made up of teachers and learners who 
              enjoy the challenges and rewards of a quality, well-rounded education</p><br/>
            <p>We pride ourselves on what we can offer our learners. 
              We offer a rich diversity of academic, cultural and sport activities to 
              develop our students to their full potential. We are a family and strive 
              only for the best, be it for our students, parents, staff or the communities whom we serve.</p>
          </div>
        </div>
      </section>
  )
}
