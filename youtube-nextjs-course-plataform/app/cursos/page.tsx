import { Metadata } from "next";
import { Section } from "../components/section/Section";

//title supuerior da tela...
export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",

};

export default function PageCursos() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px] w-full">
        <Section
          title="Todos os Cursos"
          variant="grid"
          items={[
            {
            href: '/cursos/idd',
            title: '1Curso de API Rest, Node e TypeScript',
            image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
            description: `
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `,
          },
           {
            href: '/cursos/idd',
            title: '2 Curso de API Rest, Node e TypeScript',
            image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
            description: `
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `,
          },
           {
            href: '/cursos/idd',
            title: '3 Curso de API Rest, Node e TypeScript',
            image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
            description: `
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `,
          },
           {
            href: '/cursos/idd',
            title: '4 Curso de API Rest, Node e TypeScript',
            image: 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg',
            description: `
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `,
          }
        ]}
        />
      </div>
    </main>
  )
}

