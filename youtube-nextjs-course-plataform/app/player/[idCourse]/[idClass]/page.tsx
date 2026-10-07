
import { PlayerHeader } from "@/app/components/player";


interface Props {
  params: {
    idCourse: string;
    idClass: string;
  };
}

export default  function PlayerPage({ params: { idCourse, idClass } }: Props) {
  

  return (
    <>

      <PlayerHeader
        title='Cursos de API Rest, Node e TypeScript: #00 - apresentação do curso'
        subtitle='Apresentação do curso de API Rest, Node e TypeScript'
      />

      player {idCourse}  {idClass}
    </>
  );
}