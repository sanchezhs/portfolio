// Icons from https://icons8.com/ and https://www.svgrepo.com/
import PythonIcon from "../../assets/languages/python.svg";
import JavaIcon from "../../assets/languages/java.svg";
import RIcon from "../../assets/languages/r.svg";
import HaskellIcon from "../../assets/languages/haskell.svg";
import JavaScriptIcon from "../../assets/languages/javascript.svg";
import TypeScriptIcon from "../../assets/languages/typescript.svg";
import GoIcon from "../../assets/languages/go.svg";
import CIcon from "../../assets/languages/c.svg";
import CppIcon from "../../assets/languages/cpp.svg";

// Techs
import ReactIcon from "../../assets/technologies/react.svg";
import DjangoIcon from "../../assets/technologies/django.svg";
import OutSystemsIcon from "../../assets/technologies/outsystems.svg";
import OracleIcon from "../../assets/technologies/oracle.svg";
import BootstrapIcon from "../../assets/technologies/bootstrap.svg";
import TailwindIcon from "../../assets/technologies/tailwind.svg";
import HtmlIcon from "../../assets/technologies/html.svg";
import CssIcon from "../../assets/technologies/css.svg";

export type Skill = {
  name: string,
  icon: string,
};

export const myLanguages : Skill[] = [
  { name: "Python", icon: PythonIcon },
  { name: "Java", icon: JavaIcon },
  { name: "R", icon: RIcon },
  { name: "Haskell", icon: HaskellIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Go", icon: GoIcon },
  { name: "C", icon: CIcon },
  { name: "C++", icon: CppIcon },

];

export const myTechnologies = [
  { name: "React", icon: ReactIcon },
  { name: "Django", icon: DjangoIcon },
  { name: "OutSystems", icon: OutSystemsIcon },
  { name: "Oracle", icon: OracleIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
];

