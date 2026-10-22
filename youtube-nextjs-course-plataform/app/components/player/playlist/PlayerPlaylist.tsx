'use client';
import { useState, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';

import { IPlayerClassGroupProps, PlayerClassGroup } from '../../player/playlist/Components/PlayerClassGroup';


interface IPlayerPlaylistProps {
  playingClassId: string;
  playingCourseId: string;
  classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[];
}
export const PlayerPlaylist = ({ classGroups, playingClassId, playingCourseId }: IPlayerPlaylistProps) => {
  const progressKey = `course-progress:${playingCourseId}`;
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(() => {
  const index = classGroups.findIndex((group) =>
    group.classes.some((classItem) => classItem.classId === playingClassId)
  );

  return index >= 0 ? index : undefined;
});
  

const savedProgress = useSyncExternalStore(
  (onStoreChange) => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === progressKey) onStoreChange();
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('course-progress-changed', onStoreChange);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('course-progress-changed', onStoreChange);
    };
  },
  () => window.localStorage.getItem(progressKey),
  () => null,
);
const completedClassIds: string[] = (() => {
  try {
    const parsedProgress: unknown = savedProgress ? JSON.parse(savedProgress) : [];
    return Array.isArray(parsedProgress)
      ? parsedProgress.filter((classId): classId is string => typeof classId === 'string')
      : [];
  } catch {
    return [];
  }
})();

const handleMarkDone = (classId: string) => {
  const updatedIds = completedClassIds.includes(classId)
    ? completedClassIds
    : [...completedClassIds, classId];
  window.localStorage.setItem(progressKey, JSON.stringify(updatedIds));
  window.dispatchEvent(new Event('course-progress-changed'));
};
  const router = useRouter();


  return (
    <div className='flex h-full  flex-col gap-2'>
      <div className='flex shrink-0 flex-col p-4 bg-[var(--color-paper)]'>
        <h3 className='text-lg font-bold'>
          Conteúdo do curso
        </h3>
      </div>

      <ol className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overflow-primary">
        {classGroups.map((classGroup, index) => (
          <li key={`${classGroup.title}-${index}`}>
            <PlayerClassGroup
              {...classGroup}
              classes={classGroup.classes.map((classItem) => ({
                ...classItem,
                done: classItem.done || completedClassIds.includes(classItem.classId),
              }))}

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
