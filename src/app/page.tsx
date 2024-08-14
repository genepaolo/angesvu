import Image from "next/image";
import angesPic from "./_imgs/anges.jpg"
export default function Home() {
  return (
    <main className="relative" >
      <section className="mx-auto relative h-screen " id="about">
        <div className="w-full flex flex-col gap-y-4 justify-center py-16 z-10 relative">
          <h1 className="text-6xl font-bold text-center">Anges Vu</h1>
          <h2 className="text-xl font-bold text-center">PhD Student</h2>
        </div>
        
        <div id="aboutme"className="p-16 flex md:flex-row-reverse flex-col justify-center gap-x-12 z-10 gap-y-8 relative max-w-7xl mx-auto bg-white">
          <div className="w-full relative z-10 flex flex-col"> 
              <div className="p-4 bg-tiffany">
                <Image priority className="" src={angesPic} alt="Anges Image" sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 10vw"></Image>
              <div/>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-4 ">
              
              <p className="aboutme-text">Hi! I am a PhD student in the <a target="_blank" href="https://linguistics.northwestern.edu/">Department of Linguistics at Northwestern University </a>interested in bilingualism, speech production and perception, and language acquisition. My current research explores how switched-dominance heritage speakers (in particular, Vietnamese-English bilinguals) produce and perceive speech sounds that are either shared between or unique to each language.
              </p>
              <p className="aboutme-text">At Northwestern, I am affiliated with the <a target="_blank" href="https://linguistics.northwestern.edu/research/sound-phonetics-phonology-lab.html">Sound Lab and the Speech and Communication Group</a> and am advised by <a target="_blank" href="https://www.linkedin.com/in/matthew-goldrick-95991261/">Matt Goldrick</a> and <a target="_blank" href="https://www.linkedin.com/in/ann-bradlow-8344939/">Ann Bradlow</a>.
              </p>
              <p className="aboutme-text">Before coming to Northwestern, I completed my BA in Linguistics and minors in Computer Science, Psychology, and Cognitive Science from UC San Diego.
              </p>
              <p className="aboutme-text">            <i className="fa-solid fa-envelope text-cambridge"></i> <a target="_blank" href="mailto:angesvu@u.northwestern.edu">angesvu@u.northwestern.edu</a>
              </p>
            </div>
        </div>
        {/* <div className="absolute spacer hero-bg"></div> */}
      </section>
      
      <section id="teaching" className="h-screen bg-tiffany">
      </section>
      <section id="research"className="h-screen bg-transparent">
      </section>
    </main>
  );
}
