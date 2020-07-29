import React, { useCallback, useState } from 'react';
import { Media, Badge } from 'reactstrap';
import useSound from 'use-sound';
import { WeddingEvent } from '../data/weddingEvents';

type Props = {
  weddingEvent: WeddingEvent
}

export default ({ weddingEvent }: Props) => {
  const [play, { stop }] = useSound(weddingEvent.sound, { volume: weddingEvent.volume });
  const [icon, setIcon] = useState(weddingEvent.icon)
  
  const handleMouseOver = useCallback(() => {
    play();
    setIcon(weddingEvent.iconAlt);
  }, [play, weddingEvent])

  const handleMoueLeave = useCallback(() => {
    stop();
    setIcon(weddingEvent.icon);
  }, [stop, weddingEvent])

  return (
    <Media>
      <Media left onMouseEnter={handleMouseOver} onMouseLeave={handleMoueLeave}>
        <Media object src={icon} alt={`icone-${weddingEvent.description}`} style={{ width: 64, height: 64, margin: 15 }} />
      </Media>
      <Media body>
        <Media heading>
          <Badge color="primary" >{weddingEvent.hour}</Badge>
          <br />
          {weddingEvent.comment ? '* ' : null}{weddingEvent.description}
        </Media>
      </Media>
    </Media>
  );
}