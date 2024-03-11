import React from 'react'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import "../css/MainMusic.css"
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useMusicPlayer from '../hook/useMusicPlayer';

function MainMusic() {
    const { trackList, currentTrackName, playTrack, isPlaying, playNextTrack, playPreviousTrack, togglePlay } = useMusicPlayer();

    return (
        <>
            <Box sx={{
                width: "100%",
                height: "66px",
                display: "flex",
                alignItems: "center",
                borderRadius: "70px 70px 0 0",
                backgroundColor: "rgba(255, 255, 255, 0.5)"
            }}>
                <Box sx={{
                    width: "100%",
                    color: "#5e376d",
                    fontWeight: "400",
                    letterSpacing: "2px"
                }}><marquee>{currentTrackName}</marquee></Box>
            </Box>
            <div className="list-music" sx={{}}>
                {trackList.map((track, index) => (
                    <div key={index} className="song-title" onClick={() => playTrack(index)}>{track.name}</div>
                ))}
            </div>
            <Box sx={{
                width: "100%",
                height: "84px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "0 0 70px 70px",
            }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <Box>
                        <Button variant="secondary" size='large' onClick={() => playPreviousTrack()}>
                            <SkipPreviousIcon />
                        </Button>
                        <Button variant="secondary" size='large' onClick={() => togglePlay()}>
                            <PlayCircleIcon />
                        </Button>
                        <Button variant="secondary" size='large' onClick={() => playNextTrack()}>
                            <SkipNextIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MainMusic