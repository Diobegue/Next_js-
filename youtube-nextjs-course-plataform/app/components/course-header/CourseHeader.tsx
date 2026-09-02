 import { CollapsibleText } from "./components/CollapsibleText";


export const CourseHeader = () => {

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">🏆 Curso de API Rest, Node e Typescript</h1>
            <CollapsibleText numberOfLinesWhenClosed={3}>
                Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.#CODARSE
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <button className="py-2 px-4 bg-[var(--color-paper)] rounded-full">
                    Compartilhar
                </button>

               <span>48 aulas</span> 
            </div>
        </div>
    )


}