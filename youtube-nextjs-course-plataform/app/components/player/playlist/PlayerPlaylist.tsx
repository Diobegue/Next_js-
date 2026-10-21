'use client';
import { useState} from 'react';
import { useRouter } from 'next/navigation';

import { IPlayerClassGroupProps, PlayerClassGroup } from '../../player/playlist/Components/PlayerClassGroup';


interface IPlayerPlaylistProps {
  playingClassId: string;
  playingCourseId: string;
  classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[];
}
export const PlayerPlaylist = ({ classGroups, playingClassId, playingCourseId }: IPlayerPlaylistProps) => {
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(() => {
  const index = classGroups.findIndex((group) =>
    group.classes.some((classItem) => classItem.classId === playingClassId)
  );

  return index >= 0 ? index : undefined;
});
  

const [groups, setGroups] = useState(classGroups);

const handleMarkDone = (classId: string) => {
  setGroups((currentGroups) =>
    currentGroups.map((group) => ({
      ...group,
      classes: group.classes.map((classItem) =>
        classItem.classId === classId
          ? { ...classItem, done: true }
          : classItem
      ),
    }))
  );
};
  const router = useRouter();


  return (
    <div className='flex h-full  flex-col gap-2'>
      <div className='flex shrink-0 flex-col p-4 bg-[var(--color-paper)]'>
        <h3 className='text-lg font-bold'>
          Conteúdo do curso
        </h3>
      </div>

      <ol className=" flex-1 overflow-auto overflow-primary">
        {groups.map((classGroup, index) => (
          <li key={`${classGroup.title}-${index}`}>
            <PlayerClassGroup
              {...classGroup}

              playingClassId={playingClassId}

              position={index + 1}
              open={openedIndex === index}
              onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}

              onCheck={handleMarkDone}
              onPlay={(classId) => router.push(`/player/${playingCourseId}/${classId}`)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};