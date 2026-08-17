import { Metadata } from "next";

import { Section } from "./components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
  
};

export default function PageHome() {
  return (
   <main className="">

    <Section />
    {/* <Card 
      href="/cursos/idd"
      image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
      title="Curso de API Rest, Node e TypeScript"
      description={`
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `}
    /> */}
   </main>
  )
}
