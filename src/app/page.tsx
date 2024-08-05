import Image from "next/image";
import angesPic from "./_imgs/anges.jpg"
export default function Home() {
  return (
    <main className="relative">
      <section className="mx-auto relative h-screen bg-blue" id="about">
        <div className="w-full flex flex-col gap-y-4 justify-center py-20 z-10 relative">
          <h1 className="text-6xl font-bold text-center">Anges Vu</h1>
          <h2 className="text-xl font-bold text-center">PhD Student</h2>
        </div>
        <div id="aboutme"className="flex flex-row justify-center gap-y-4 z-10 relative">
          <div className="w-full flex flex-col gap-y-4 ">
            
            <p className="">Hi! I am a PhD student in the Department of Linguistics at Northwestern University interested in bilingualism, speech production and perception, and language acquisition. My current research explores how switched-dominance heritage speakers (in particular, Vietnamese-English bilinguals) produce and perceive speech sounds that are either shared between or unique to each language.
            </p>
            <p className="">At Northwestern, I am affiliated with the Sound Lab and the Speech and Communication Group and am advised by Matt Goldrick and Ann Bradlow.
            </p>
            <p className="">Before coming to Northwestern, I completed my BA in Linguistics and minors in Computer Science, Psychology, and Cognitive Science from UC San Diego.
            </p>
            <p className="">contact: <a href="mailto:angesvu@u.northwestern.edu">angesvu@u.northwestern.edu</a>
            </p>
          </div>
          <div className="w-full relative z-10">
            <div className="w-auto flex flex-col items-center justify-center ">
              <Image src={angesPic} alt="Anges Image" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"></Image>
          </div>
            
          </div>
        </div>
        <div className="absolute spacer hero-bg"></div>
      </section>
      
      <section id="teaching" className="h-screen bg-blue">
      </section>
      <section id="research"className="h-screen bg-transparent">
      </section>
    </main>
  );
}
