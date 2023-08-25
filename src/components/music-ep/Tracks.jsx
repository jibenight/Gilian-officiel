import React, { useState, useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import './Tracks.css';
// import tracksData from './tracksDat';
import ButtonClose from '../close/ButtonClose';

function tracksData({ closeComponent }) {
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackChange = track => {
    setCurrentTrack(track);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    audioRef.current.load();
  }, [currentTrack]);

  return (
    <m.div
      className='background-item'
      key='tracksData'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sub-title'>
        <h2>tracksData</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
      <div id='tracksData'>
        <div className='player'>
          <picture>
            <source
              media='(max-width: 767px)'
              srcSet={currentTrack.coverMobile}
            />
            <source
              media='(min-width: 768px)'
              srcSet={currentTrack.coverDesktop}
            />
            <img
              src={currentTrack.coverDesktop} // fallback
              alt={currentTrack.title}
            />
          </picture>
          <audio ref={audioRef} src={currentTrack.source}></audio>
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className='tracklist'>
          {tracksData.map((track, index) => (
            <div key={index} onClick={() => handleTrackChange(track)}>
              {track.title}
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}

export default tracksData;
