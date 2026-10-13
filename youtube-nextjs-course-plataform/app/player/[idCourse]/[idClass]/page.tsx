"use client";
import { PlayerHeader, PlayerClass } from "@/app/components/player";
import { PlayerGroupClass } from "@/app/components/player/PlayerGroupClass";

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
    <>
      <PlayerHeader title={title} subtitle={lesson.subtitle} />

      <PlayerClass
        onPlay={() => console.log("play")}
        onCheck={() => console.log("check")}
        done={false}
        playing={true}
        title={title}
      />

      <PlayerGroupClass />
    </>
  );
}