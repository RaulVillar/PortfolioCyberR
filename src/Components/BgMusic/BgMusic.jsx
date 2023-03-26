import React, { useState, useRef, useEffect } from 'react';
import CyberMusic from "../../Assets/Music/CyberMusic.mp3"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import IconButton from '@mui/material/IconButton';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audio] = useState(new Audio(CyberMusic));

  useEffect(() => {
    audio.volume = 0.1;
  }, [audio]);

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <IconButton title="Music Player" onClick={togglePlay}>
        {isPlaying ? <PauseCircleOutlineIcon style={{color: 'yellow', fontSize: 50}} /> : <PlayCircleOutlineIcon style={{color: 'yellow', fontSize: 50}}/>}
      </IconButton>
      <audio loop ref={audioRef} />
    </div>
  );
}

export default MusicPlayer;

