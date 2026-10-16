

import { PlayerHeader } from "@/app/components/player";
import { PlayerClassGroup } from "@/app/components/player/PlayerClassGroup";

interface Props {
  params: Promise<{
    idCourse: string;
    idClass: string;
  }>;
}

const courseCatalog: Record<string, {
  title: string;
  subtitle: string;
  lessons: Record<string, { title: string; subtitle: string }>;
}> = {
  "1": {
    title: "Cursos de API Rest, Node e TypeScript",
    subtitle: "Curso de NodeJS e TypeScript iniciante",
    lessons: {
      "1": {
        title: "#00 - apresentação do curso",
        subtitle: "Apresentação do curso de API Rest, Node e TypeScript",
      },
      "2": {
        title: "#01 - configurando o ambiente",
        subtitle: "Preparando o ambiente para desenvolver a API",
      },
      "3": {
        title: "#02 - criando a primeira rota",
        subtitle: "Estrutura inicial do backend e primeiras rotas",
      },
    },
  },
};

export default async function PlayerPage({ params }: Props) {
  const { idCourse, idClass } = await params;

  const course = courseCatalog[idCourse] ?? courseCatalog["1"];
  const lesson = course.lessons[idClass] ?? course.lessons["1"];

  const title = `${course.title}: ${lesson.title}`;

  return (
    <main className="flex flex-col gap-20">
      <PlayerHeader title={title} subtitle={lesson.subtitle} />

      

      <PlayerClassGroup 
        
        
        title="Introdução e apresentação do curso"
        position={1}
        classes={[
          { title: "Cursos de API Rest, Node e TypeScript-#00 Curso de NodeJS e TypeScript iniciante",
            playing: false, 
            done: true,
          },
           { title: "Cursos de API Rest, Node e TypeScript-#01 Curso de NodeJS e TypeScript iniciante",
            playing: true, 
            done: false,
          },
           { title: "Cursos de API Rest, Node e TypeScript-#02 Curso de NodeJS e TypeScript iniciante",
            playing: false, 
            done: false,
          },
           { title: "Cursos de API Rest, Node e TypeScript-#03 Curso de NodeJS e TypeScript iniciante",
            playing: false, 
            done: false,
          },
          
        ]}
      />
    </main>
  );
}
