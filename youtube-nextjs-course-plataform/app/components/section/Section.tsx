import { Card } from '../card/Card';

export const Section = () => {
    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">
                Todos os Cursos
            </h2>

            <ul className="flex flex-col gap-2 ">
                <li>
                    <Card
                        href="/cursos/idd"
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        title="Curso de API Rest, Node e TypeScript"
                        description={`
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `} />
                </li>
                <li>
                                <Card
                        href="/cursos/idd"
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        title="Curso de API Rest, Node e TypeScript"
                        description={`
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `} />
                </li>
                <li>
                                <Card
                        href="/cursos/idd"
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        title="Curso de API Rest, Node e TypeScript"
                        description={`
        572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.
        `} />
                </li>
            </ul>
        </section>
    )
}