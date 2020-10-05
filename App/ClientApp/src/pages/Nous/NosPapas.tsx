import React from 'react';
import { Link, } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export default () => (
  <AudioPlayer
    header={<>Bons Papas - <Link to="/equipe/aurelie">Aurélie</Link></>}
    autoPlay
    src="/assets/sound/nos-papas.mp3"
  />
);
