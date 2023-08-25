import React, { useState, useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import './Tracks.css';
import tracksData from './tracksData';
import ButtonClose from '../close/ButtonClose';
import playButton from '../../assets/images/icons/play.svg';
import pauseButton from '../../assets/images/icons/pause.svg';
import youtubeIcon from '../../assets/images/icons/youtube.svg';

function Tracks({ closeComponent }) {
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = track => {
    if (isPlaying && currentTrack === track) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

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
        <h2>Musique</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
      <div id='tracksData'>
        <div className='player'>
          <picture className='cover'>
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
              alt={currentTrack.title || 'Default Track'}
            />
          </picture>
          <audio ref={audioRef} src={currentTrack.source}></audio>
        </div>
        <div className='tracklist'>
          {tracksData.map((track, index) => {
            // Si le track n'a ni titre ni source, ne rien afficher
            if (!track.title && !track.source) return null;

            return (
              <React.Fragment key={index}>
                <div className='music-item'>
                  <div>
                    <h3>{track.title || 'Default Track'}</h3>
                  </div>
                  <div className='icon-play'>
                    {track.source ? (
                      <div>
                        <button onClick={() => handlePlayPause(track)}>
                          {isPlaying && currentTrack === track ? (
                            <img src={pauseButton} alt='bouton de lecture' />
                          ) : (
                            <img src={playButton} alt='bouton de lecture' />
                          )}
                        </button>
                      </div>
                    ) : (
                      <div>À VENIR</div>
                    )}
                    {track.youtubeLink && (
                      <div>
                        <a
                          href={track.youtubeLink}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img src={youtubeIcon} alt='YouTube' />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                {index !== tracksData.length - 1 && <hr />}
                {/* Ne pas ajouter <hr> après le dernier élément */}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}

export default Tracks;
