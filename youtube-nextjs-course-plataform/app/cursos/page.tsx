import { Metadata } from "next";
import { Section } from "../components/section/Section";

//title supuerior da tela...
export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",

};

export default function PageCursos() {
  return (
    <main className="">
       <Section 
       title="Todos os Cursos" 
       variant="grid"
       />
    </main>
  )
}

