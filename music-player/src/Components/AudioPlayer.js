import React, { useRef, createRef, memo, useEffect } from 'react';

function AudioPlayerComp(props) {
  const audioInfo = createRef(null);
  const audioRef = useRef(null);
  const audioFile = 'assets/media/' + props.currentSongName;

  const getDOMNode = () => {
    return audioRef?.current;
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = getDOMNode();
    if (isNaN(duration)) return;
    props.onTimeUpdate({
      currentTime,
      trackDuration: duration,
    });
  };

  const handleMediaEnd = () => {
    getDOMNode().currentTime = 0;
    props.onEnd();
  };

  const updateCurrentTime = () => {
    const node = getDOMNode();
    if (node.readyState) {
      node.currentTime = props.defaultTime;
    }
  };

  const updateIsPlaying = () => {
    const node = getDOMNode();

    if (props.isPlaying) {
      node.play();
    } else {
      node.pause();
    }
  };

  const updateSource = () => {
    const node = getDOMNode();

    if (node.paused === false && node.readyState) {
      node.pause(); //pause if playing
    }
    props.onTimeUpdate({
      currentTime: 0,
      trackDuration: node.duration,
    });

    node.load();
    if (props.isPlaying) {
      node.readyState && node.play();
    }
  };
  const setAudioInfo = (key, value) => {
    if (audioInfo.current) {
      audioInfo.current[key] = value;
    } else {
      audioInfo.current = {
        ...audioInfo.current,
        [key]: value,
      };
    }
  };
  useEffect(() => {
    if (getDOMNode()?.songName !== props.currentSongName) {
      updateSource();
      setAudioInfo('songName', props.currentSongName);
    }
    if (getDOMNode()?.isPlaying !== props.isPlaying) {
      updateIsPlaying();
      setAudioInfo('isPlaying', props.isPlaying);
    }
    if (getDOMNode()?.defaultTime !== props.defaultTime) {
      updateCurrentTime();
      setAudioInfo('defaultTime', props.defaultTime);
    } else {
      const node = getDOMNode();
      node.addEventListener('timeupdate', handleTimeUpdate);
      node.addEventListener('ended', handleMediaEnd);

      updateIsPlaying();
    }
    return () => {
      const node = getDOMNode();
      node.removeEventListener('timeupdate', handleTimeUpdate);
      node.removeEventListener('ended', handleMediaEnd);
    };
  }, [props.isPlaying, props.defaultTime, props.songName, props.volume]);

  return (
    <audio ref={audioRef}>
      <source src={audioFile} type="audio/mp3" />
    </audio>
  );
}

export const AudioPlayer = memo(AudioPlayerComp);
