import front from './device-front-nav.png';
import side from './device-side.webp';
import sideSmall from './device-side-480.webp';
export const deviceImages = { front, side };
export const deviceSources = { front: front + ' 1254w', side: sideSmall + ' 480w, ' + side + ' 1254w' };
export const deviceFallbacks = { front, side };
export const galleryViews = [
  { id: 'front', label: 'Front', alt: 'JustRide Aventura circular navigation display showing 300 m turn right with green glowing route' },
  { id: 'side', label: 'Side', alt: 'Side of the circular JustRide device with a physical power button' },
];
