import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Contacts(props:any) {
  const color = props.color ? props.color : "text-white";
  return (
    <div className="text-md flex flex-row justify-center gap-x-4">
      <a href="mailto:angesvu@u.northwestern.edu" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} className={`${color}`} />
      </a>
      <a href="https://www.linkedin.com/in/angesvu/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={`${color}`} />
      </a>
      <a href="https://www.facebook.com/anges.vu" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className={`${color}`} />
      </a>
    </div>
  );
}
