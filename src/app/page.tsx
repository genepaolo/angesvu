import Image from "next/image";
import angesPic from "./_imgs/anges.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Contacts from "./_components/Contacts";

export default function Home() {
  return (
    <main className="relative">
      <section className="mx-auto relative min-h-screen " id="about">
        <div className="w-full flex flex-col gap-y-4 justify-center py-24 z-10 relative">
          <h1 className="text-6xl font-bold text-center">Anges Vu</h1>
          <h2 className="text-xl font-bold text-center">PhD Student</h2>
        </div>

        <div
          id="aboutme"
          className="p-16 flex md:flex-row-reverse flex-col justify-center gap-x-12 z-10 gap-y-8 relative max-w-7xl mx-auto bg-white"
        >
          <div className="w-full relative z-10 flex flex-col">
            <div className="p-4 bg-tiffany">
              <Image
                priority
                unoptimized
                className=""
                src={angesPic}
                alt="Anges Image"
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 10vw"
              ></Image>
              <div />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-4 ">
            <p className="aboutme-text">
              Hi! I am a PhD student in the{" "}
              <a target="_blank" href="https://linguistics.northwestern.edu/">
                Department of Linguistics at Northwestern University{" "}
              </a>
              interested in bilingualism, speech production and perception, and
              language acquisition. My current research explores how
              switched-dominance heritage speakers (in particular,
              Vietnamese-English bilinguals) produce and perceive speech sounds
              that are either shared between or unique to each language.
            </p>
            <p className="aboutme-text">
              At Northwestern, I am affiliated with the{" "}
              <a
                target="_blank"
                href="https://linguistics.northwestern.edu/research/sound-phonetics-phonology-lab.html"
              >
                Sound Lab and the Speech and Communication Group
              </a>{" "}
              and am advised by{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matthew-goldrick-95991261/"
              >
                Matt Goldrick
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ann-bradlow-8344939/"
              >
                Ann Bradlow
              </a>
              .
            </p>
            <p className="aboutme-text">
              Before coming to Northwestern, I completed my BA in Linguistics
              and minors in Computer Science, Psychology, and Cognitive Science
              from UC San Diego.
            </p>
            <p className="aboutme-text">
              <FontAwesomeIcon icon={faEnvelope} className="text-cambridge" />
              &nbsp;
              <a target="_blank" href="mailto:angesvu@u.northwestern.edu">
                angesvu@u.northwestern.edu
              </a>
            </p>
          </div>
        </div>
        {/* <div className="absolute spacer hero-bg"></div> */}
      </section>

      <section id="teaching" className="min-h-screen bg-tiffany py-24">
        <h1 className="text-6xl font-bold text-center">Teaching</h1>
        <div className="flex flex-col gap-y-4 justify-center py-24 z-10 relative items-center md:flex-row px-16">
          <div className="p-4 teaching-card w-full max-w-xl">
            <div className="flex flex-col gap-y-4 text-center bg-white shadow-lg p-8">
              <FontAwesomeIcon
                icon={faSchool}
                className="text-tiffany text-8xl"
              />

              <h2 className="text-lg font-bold">
                Sound Patterns in Human Language
              </h2>
              <p className="text-sm">
                [Fall 2024] Department of Linguistics, Northwestern University
              </p>
              <p className="text-sm">Instructor: Jennifer Cole</p>
            </div>
          </div>
        </div>
      </section>
      <section id="research" className="min-h-screen bg-transparent py-24">
        <h1 className="text-6xl font-bold text-center">Research</h1>
        <div className="p-16 flex md:flex-row-reverse flex-col justify-center gap-x-12 z-10 gap-y-8 relative max-w-7xl mx-auto bg-white">
          <p>
            My current study seeks to understand how bilingual individuals
            manage two distinctive languages by investigating vowel productions
            in each language. The research objective of this project is to
            develop an empirical resource for research on L1 and L2 vowel speech
            sound productions of Vietnamese-English heritage bilinguals, which
            will then be used to investigate the separate and combined effects
            of language-specific and language-general influences on speech
            production. This approach capitalizes on current corpus phonetics
            techniques, namely, speech elicitation tasks. The specific aims of
            the proposed research are to develop a Vietnamese-English L1-L2
            corpus from multiple talkers and to acoustically analyze and
            document the spectral shaping and duration of vowels produced by
            Vietnamese-English heritage bilinguals.
          </p>
        </div>
      </section>
      <section id="footer" className="h-16 w-full">
        <div className="flex flex-row justify-center w-full py-8 z-10 relative items-center md:flex-row px-16">
          <div className="text-gray">
            <p className="text-sm">@2024 Northwestern University, Chicago IL</p>
            <Contacts/>
          </div>
        </div>
      </section>
    </main>
  );
}
