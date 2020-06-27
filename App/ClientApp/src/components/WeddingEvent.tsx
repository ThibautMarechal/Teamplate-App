import React from 'react';
import { Media, Badge } from 'reactstrap';
import useSound from 'use-sound';
import { WeddingEvent } from '../data/weddingEvents';

type Props = {
  weddingEvent: WeddingEvent
}

export default ({ weddingEvent }: Props) => {
  const [play] = useSound(weddingEvent.sound, { volume: weddingEvent.volume });

  return (
    <Media>
      <Media left onMouseEnter={() => play()}>
        <Media object src={weddingEvent.icon} alt={`icone-${weddingEvent.description}`} style={{ width: 64, height: 64, margin: 15 }} />
      </Media>
      <Media body>
        <Media heading>
          <Badge color="primary" >{weddingEvent.hour}</Badge>
          <br />
          {weddingEvent.description}
        </Media>
      </Media>
    </Media>
  );
}