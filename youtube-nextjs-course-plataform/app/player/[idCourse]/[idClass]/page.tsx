import { PlayerHeader, PlayerPlaylist } from '../../../components/player/';


interface Props {
  params: {
    classId: string;
    courseId: string;
  }
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {


  return (
    <main className='flex flex-col gap-2'>
      <PlayerHeader
        title='API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
        subtitle='🏆 Curso de API Rest, Node e Typescript'
      />

      <div className='flex gap-2'>
        <div className='max-w-96'>
          <PlayerPlaylist
            playingClassId={classId}
            playingCourseId={courseId}
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

        <div className='flex-1'>
          Player
        </div>
      </div>
    </main>
  );
}