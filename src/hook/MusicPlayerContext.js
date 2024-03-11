import React, { useState } from "react";
import Track1 from "../track/sad-soul-chasing-a-feeling-185750.mp3";
import Track2 from "../track/seaside-in-sorrow-sad-and-touching-soft-piano-112330.mp3";
import Track3 from "../track/separation-185196.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
        {
            name: "Cold Gin - Jazz",
            file: Track1,
        },
        {
            name: "heaven's On Fire - Jazz",
            file: Track2,
        },
        {
            name: "Beth - Jazz",
            file: Track3,
        },
    ],
    currentTrackIndex: null,
    isPlaying: false,
}

const MusicPlayerProvider = ({ children }) => {
    const [state, setState] = useState(defaultValues);
    return (
        <MusicPlayerContext.Provider value={{ state, setState }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };