import React, { useState } from 'react'
import styles from './InteractiveMap.module.scss';

export type SubMaps = {
  x: number;
  y: number;
  map: Map;
}

export type Map = {
  src: string;
  subMaps?: SubMaps[];
  pointOfInterests?: PointOfInterest[]
}

export type PointOfInterest = {
  x: number;
  y: number;
  element: JSX.Element;
}

export type Props = {
  depth: number;
  onZoomOut: () => void;
} & Map;

const InteractiveMap = ({ 
  src,
  depth = 0,
  subMaps = [],
  pointOfInterests = [],
  onZoomOut
}: Props) => {
  const [zommedSubMapIndex, setZommedSubMapIndex] = useState(-1);
  if(zommedSubMapIndex >= 0){
    return <InteractiveMap {...subMaps[zommedSubMapIndex].map} depth={depth + 1} onZoomOut={() => setZommedSubMapIndex(-1)}/>
  } else {
    return (
      <div className={styles.wrapper}>
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
        {pointOfInterests.map(poi => (
          <div
            className={styles.pointOfInterest}
            style={{
              top: `${poi.y * 100}%`,
              left: `${poi.x * 100}%`
            }}
          >
            {poi.element}
          </div>
        ))}
      </div>
    );
  }
} 

export default  InteractiveMap as React.ComponentType<Omit<Props, 'depth' | 'onZoomOut'>>;