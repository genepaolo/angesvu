import Image from "next/image";
import angesPic from "./_imgs/anges.jpg"
export default function Home() {
  return (
    <main className="container">
      <section id="aboutme"className="flex flex-row">
        <div className="w-full">
          <h1>Anges Vu</h1>
          <p>Hi! I am a PhD student in the Department of Linguistics at Northwestern University interested in bilingualism, speech production and perception, and language acquisition. My current research explores how switched-dominance heritage speakers (in particular, Vietnamese-English bilinguals) produce and perceive speech sounds that are either shared between or unique to each language.
          </p>
          <p>At Northwestern, I am affiliated with the Sound Lab and the Speech and Communication Group and am advised by Matt Goldrick and Ann Bradlow.
          </p>
          <p>Before coming to Northwestern, I completed my BA in Linguistics and minors in Computer Science, Psychology, and Cognitive Science from UC San Diego.
          </p>
          <p>contact: <a>angesvu@u.northwestern.edu</a>
          </p>
        </div>
        <div className="w-full">
          <div className="w-100">
            <Image src={angesPic} alt="Anges Image"></Image>
          </div>
          
        </div>
      </section>
      {/* <section id="research"className="">
      </section>
      <section id="teaching"className="">
      </section> */}
    </main>
  );
}
