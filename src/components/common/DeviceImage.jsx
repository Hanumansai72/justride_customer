import React, { useState } from 'react';
import { deviceImages, deviceSources, deviceFallbacks } from '../../assets/device';

export default function DeviceImage({ view = 'front', sizes = '(max-width: 700px) 100vw, 50vw', ...props }) {
  const [fallback, setFallback] = useState(false);
  return <img {...props} src={fallback ? deviceFallbacks[view] : deviceImages[view]}
    srcSet={fallback ? undefined : deviceSources[view]} sizes={sizes}
    onError={() => setFallback(true)} />;
}
