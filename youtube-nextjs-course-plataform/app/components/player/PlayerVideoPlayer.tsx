"use client";
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false});


interface IPlayerVideoPlayerProps {
    videoId: string;
}



export const PlayerVideoPlayer = ({videoId}: IPlayerVideoPlayerProps) => {

    

    return (
        <>
            <ReactPlayer 
               src={`https://www.youtube.com/watch?v=${videoId}`} 
                width="100%"
                height="90%"
                controls={true}
                playing={false}
            />
        </>
    )

}
