import React, { useState, useCallback } from 'react'
import { useMouse } from 'react-use';
import { AutoSizer } from 'react-virtualized';


type PuplicProps = {
 src: string;
 children?: React.ReactElement;
}

type InternalProps = {
  root: boolean;
}

type Props = PuplicProps & InternalProps;

const InteractiveMap = ({ 
  src, 
  children,
  root = true
}: Props) => {
  const [zoomed, setZommed] = useState(false);
  const handleZoom = useCallback(() => setZommed(true), []);
  const ref = React.useRef(null);
  const {docX, docY, posX, posY, elX, elY, elW, elH} = useMouse(ref);
  // const handleUnZoom = useCallback(() => setZommed(false), []);
  if(zoomed && children) {
    return React.cloneElement(children, { root: false });
  } else {
    return (
      <AutoSizer disableHeight>
        {({ width }) => {
          let transform = 'scale(0.8)';
          if(elX > 0 && elY > 0) {
            transform += ` translate(${width / 2}px, ${elY}px)`;
          }
          return (
            <div ref={ref} style={{ width, overflow: 'hidden' }}>
              <img src={src} alt="map" onClick={handleZoom} style={{
                width: width,
                transform
              }}/>
            </div>
          );
        }}
      </AutoSizer>

    );
  } 
} 

export default  InteractiveMap as React.ComponentType<PuplicProps>;