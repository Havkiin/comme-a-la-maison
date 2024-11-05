export type SoundBoardElement = {
    id: number,
    img: string,
    sounds: string[]
};

export const soundBoardElements : SoundBoardElement[] = [
    {
        id: 0,
        img: 'finkye.png',
        sounds: ['Finkye1.wav','Finkye2.wav', 'Finkye3.wav']
    },
    {
        id: 1,
        img: 'francis_huster.png',
        sounds: ['Huster1.wav', 'Huster2.wav', 'Huster3.wav', 'Huster4.wav', 'Huster5.wav']
    },
    {
        id: 2,
        img: 'kyan.png',
        sounds: ['Kyan1.wav', 'Kyan2.wav']
    },
    {
        id: 3,
        img: 'lacoste.png',
        sounds: ['Lacoste1.wav', 'Lacoste2.wav', 'Lacoste3.wav', 'Lacoste4.wav', 'Lacoste5.wav', 'Lacoste6.wav']
    },
    {
        id: 4,
        img: 'lepen.png',
        sounds: ['Lepen1.wav']
    },
    {
        id: 5,
        img: 'cluzet.png',
        sounds: ['Cluzet1.wav', 'Cluzet2.wav']
    }
];