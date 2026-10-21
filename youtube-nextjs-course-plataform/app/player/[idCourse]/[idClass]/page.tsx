import { PlayerHeader, PlayerPlaylist } from '../../../components/player/';


interface Props {
  params: Promise<{
    idClass: string;
    idCourse: string;
  }>;
}
export default async function PagePlayer({ params }: Props) {
  const { idCourse, idClass } = await params;
  return (
    <main className='flex h-[calc(100dvh-4rem)] flex-col gap-2 overflow-hidden sm:h-[calc(100dvh-4.5rem)]'>
      <PlayerHeader
        title='API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
        subtitle='🏆 Curso de API Rest, Node e Typescript'
      />

      <div className='flex min-h-0 flex-1 gap-2'>
        <div className='min-h-0 w-full max-w-96'>
          <PlayerPlaylist
            key={`${idCourse}-${idClass}`}
            playingClassId={idClass}
            playingCourseId={idCourse}
            classGroups={[
              
              {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-00',
                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-01',
                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-02',
                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-03',
                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-00',
                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-01',
                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-02',
                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-03',
                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
               {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-00',
                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-01',
                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-02',
                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-03',
                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
               {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-00',
                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-01',
                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-02',
                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-03',
                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
               {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-00',
                    title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-01',
                    title: 'API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-02',
                    title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-03',
                    title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              },
              {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    done: true,
                    classId: 'aula-04',
                    title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-05',
                    title: 'API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-06',
                    title: 'API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                  {
                    done: false,
                    classId: 'aula-07',
                    title: 'API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais'
                  },
                ]
              }
            ]}
          />
        </div>

        <div className='min-h-0 flex-1 overflow-hidden'>
          Player
        </div>
      </div>
    </main>
  );
}