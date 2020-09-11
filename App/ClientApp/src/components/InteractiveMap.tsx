import React, { useState } from 'react'
import styles from './InteractiveMap.module.scss';

type subMaps = {
  x: number;
  y: number;
  map: Map;
}

type Map = {
  src: string;
  subMaps?: subMaps[]
}

type Props = {
  depth: number;
  onZoomOut: () => void;
} & Map;

const InteractiveMap = ({ 
  src,
  depth = 0,
  subMaps = [],
  onZoomOut
}: Props) => {
  const [zommedSubMapIndex, setZommedSubMapIndex] = useState(-1);
  if(zommedSubMapIndex >= 0){
    return <InteractiveMap {...subMaps[zommedSubMapIndex].map} depth={depth + 1} onZoomOut={() => setZommedSubMapIndex(-1)}/>
  } else {
    return (
      <div style={{ position: 'relative' }}>
        {depth > 0 ? (
          <img src="/assets/icon-zoom-out.png" className={styles.zommOut} alt="zoom-out" onClick={onZoomOut}/>
        ) : null}
        <img src={src} alt="map" className={styles.map} />
        {subMaps.map((subMap, i) => (   
          <div 
            className={styles.subMap}
            style={{
              top: `${subMap.y * 100}%`,
              left: `${subMap.x * 100}%`
            }}
            onClick={() => setZommedSubMapIndex(i)}
          />
        ))}
      </div>
    );
  }
} 

export default  InteractiveMap as React.ComponentType<Omit<Props, 'depth' | 'onZoomOut'>>;