import front from './device-front.webp';
import side from './device-side.webp';
import frontSmall from './device-front-480.webp';
import sideSmall from './device-side-480.webp';
import frontPng from './188e6367-079b-475e-9a8b-2baa4892a8b1.png';
import sidePng from './9c3507fa-ce34-4cf7-a760-5eb71893c492.png';
export const deviceImages = { front, side };
export const deviceSources = { front: frontSmall + ' 480w, ' + front + ' 1254w', side: sideSmall + ' 480w, ' + side + ' 1254w' };
export const deviceFallbacks = { front: frontPng, side: sidePng };
export const galleryViews = [
  { id: 'front', label: 'Front', alt: 'JustRide circular navigation display showing a left turn in 300 metres' },
  { id: 'side', label: 'Side', alt: 'Side of the circular JustRide device with a physical power button' },
];
