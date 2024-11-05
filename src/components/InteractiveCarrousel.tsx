import { useEffect, useRef, useState } from 'react';
import { soundBoardElements } from '../data/SoundBoardData';

const ANIMATION_TIME_MS = 200;

function Carrousel () {
    const randomIndex = Math.floor(Math.random() * soundBoardElements.length);
    const [SBElementIndex, setSBElementIndex] = useState<number>(randomIndex);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [soundIndex, setSoundIndex] = useState<number>(0);
    const [imgAnimationClass, setImgAnimationClass] = useState<string | null>(null);
    const [LarrowAnimationClass, setLArrowAnimationClass] = useState<string | null>(null);
    const [RarrowAnimationClass, setRArrowAnimationClass] = useState<string | null>(null);

    const audioRef = useRef<HTMLAudioElement>(new Audio());

    const currentElement = soundBoardElements[SBElementIndex];
    const SBElementNo = soundBoardElements.length;

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.pause();

            audioRef.current.src = currentElement.sounds[soundIndex];

            audioRef.current.play();
            audioRef.current.onended = () => {
                setIsPlaying(false);
            }

            const newIndex = (soundIndex + 1 == currentElement.sounds.length) ? 0 : soundIndex + 1;
            setSoundIndex(newIndex);
        }
        else {
            audioRef.current.pause();
        }

    }, [isPlaying])

    function changeSoundBoardItem(newIndex : number)
    {
        if (newIndex < -1 || newIndex > SBElementNo)
            return;

        const direction = (newIndex > SBElementIndex) ? 'Next' : 'Prev';

        let index = 0;
        if (newIndex == -1)
            index = SBElementNo - 1;
        else if (newIndex == SBElementNo)
            index = 0;
        else
            index = newIndex;

        setSoundIndex(0);
        setIsPlaying(false);
        setImgAnimationClass(`transition${direction}Out`);
        (direction == 'Next') ? setRArrowAnimationClass(`click${direction}`) : setLArrowAnimationClass(`click${direction}`);

        setTimeout(() => {
            setSBElementIndex(index);
            setImgAnimationClass(`transition${direction}In`);
            (direction == 'Next') ? setRArrowAnimationClass(null) : setLArrowAnimationClass(null);

            setTimeout(() => {
                setImgAnimationClass(null);
            }, ANIMATION_TIME_MS);
        }, ANIMATION_TIME_MS);
    }

    return (
        <div>
            <div
                className={`CarrouselArrow unselectable ${LarrowAnimationClass}`}
                onClick = {() => changeSoundBoardItem(SBElementIndex - 1)}
            >
                &lt;
            </div>
            <div
                className={`CarrouselImage unselectable ${imgAnimationClass}`}
                onClick = {() => setIsPlaying(true) }
            >
                <img src = {currentElement.img} className={isPlaying ? 'swaying' : 'still'} />
            </div>
            <div
                className={`CarrouselArrow unselectable ${RarrowAnimationClass}`}
                onClick = {() => changeSoundBoardItem(SBElementIndex + 1)}
            >
                &gt;
            </div>
        </div>
    )
}

export default Carrousel;