import Link from 'next/link'
import Image from 'next/image'

export const Card = () => {

    return (
        <Link href={'/cursos/dfsa'} className='hover:no-underline'>
            <article className='flex gap-2 flex-col p-2 rounded sm:hover:bg-[var(--color-primary)] '>
                <Image
                    width={1000} height={0}
                    src={'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg'}
                    alt={'Curso de API Rest, Node e TypeScript'}
                    draggable={false}
                    className='aspect-video object-cover rounded-2xl'
                />
                <h4 className='font-extrabold text '>Curso de API Rest, Node e TypeScript</h4>

                <p className='line-clamp-4 hover:no-underline'>

                    572 visualizações  11 de jul. de 2024  ✪ Prioridade para membros em 6 de junho de 2024  RIO GRANDE DO SUL
                    Precisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA

                    No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend.
                    Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas.


                    Links mencionados no vídeo:
                    📖 Repositório do projeto - https://github.com/lvsouza/youtube-ne...
                    🅵 Protótipo - https://www.figma.com/community/file/...
                    🗨️ Discord -   / discord

                    Outros cursos no canal:
                    🔔 NextJS, TailwindCSS e Typescript -    • NextJS, TailwindCSS e Typescript: #00 - Ap...
                    🎩 Figma para DEVs -    • Figma para DEVs: #00 - Apresentação do curso
                    ☪️ Curso de estilização no React -    • Estilização no React: Aula 00 - Curso de f...
                    ⭐️ Curso de React com typescript -    • Curso de react: Aula 01 - Começando com Re...
                    👑 React, Material UI 5 e Typescript -    • React, Material UI 5 e Typescript: #00 - I...
                    🏆 Curso de API Rest, Node e Typescript -    • API Rest, Node e Typescript: #00 - Apresen...

                    Livros recomendados:
                    📘 Código limpo - https://amzn.to/43Xiick
                    📘 Arquitetura limpa - https://amzn.to/3ZMCStr
                    📘 Migrando sistemas monolíticos - https://amzn.to/45ByPDZ
                    📘 The Micro SaaS Handbook - https://amzn.to/4jCan93

                    Conteúdo:
                    0:00 | Introdução
                    0:44 | O que faremos nessa aula
                    2:33 | Iniciando a construção do componente de Card
                    10:00 | Como utilizar as APIs do YouTube
                    19:00 | Deixando imagem não arrastavel
                    19:30 | Ajustando o CSS do card
                    27:00 | Adicionando link no card
                    30:00 | Configurando card para modo desktop
                    32:30 | Commit dos ajustes
                    33:00 | Finalização e agradecimentos


                    CODARSE - Tela inicial, de cursos e components

                    #DesenvolvimentoWeb #Programação #DesenvolvimentoDeSoftware #AprenderProgramação #CursosOnline #TechTutoriais #YouTubeEducação #CodeNewbies #DesenvolvimentoFrontend #CodeWithMe #TecnologiaEducacional #WebDesign #DesenvolvimentoDeAplicativos #AprendaACodificar #TecnologiaDeFrontend #EducaçãoDigital #DesenvolvimentoDeApps #TutoriaisDeProgramação #CódigoCriativo #ProgramaçãoParaIniciantes #NextJS #typescript #javascript #tailwindcss #react #reactjs
                    Perguntar
                    Tenha respostas para suas dúvidas, compreenda vários assuntos e muito mais
                </p>

            </article>
        </Link>
    )
}