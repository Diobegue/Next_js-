import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContext } from "./components/CopyContext";


export const CourseHeader = () => {

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">🏆 Curso de API Rest, Node e Typescript</h1>
            <CollapsibleText numberOfLinesWhenClosed={3}>
                Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.#CODARSE
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <CopyContext title="copie link abaixo" content="https://codarse.com.br/PL29TaWXah3iZqMoLjUU8EoKXQXjuc50F1">  
                    <button className="py-2 px-4 bg-[var(--color-paper)] rounded-full flex gap-2 items-center text-sm">
                        <MdShare />
                        Compartilhar
                    </button>
                </CopyContext>

               <span>48 aulas</span> 
            </div>
        </div>
    )


}