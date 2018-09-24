import 'sanitize.css';

import './index.scss';
import aiyPng from './aiy.png';

const COLUMNS = 6;
const ROWS = COLUMNS;
const W = 80;
const H = W;
const D = 10;
const RANGE = 400;

const range = (n: number) => [...Array(n).keys()];

const createSvgElement = (tag: string, attributes?: any) => {
  const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const k in attributes) {
    e.setAttribute(k, attributes[k]);
  }
  return e;
};

const svg = document.getElementById('wall')!;
svg.setAttribute('width', (D + (W + D) * COLUMNS).toString());
svg.setAttribute('height', (D + (H + D) * ROWS).toString());

const glows = range(ROWS).map(row => {
  const y = D + (H + D) * row;

  return range(COLUMNS).map(column => {
    const x = D + (W + D) * column;

    const image = createSvgElement('image', {
      x,
      y,
      width: W,
      height: H,
    });
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', aiyPng);
    svg.appendChild(image);

    const glow = createSvgElement('path', {
      d: `M ${x} ${y} m ${0.4 * W} ${0.01 * H} l ${0.2 * W} 0 l 0 ${0.05 *
        H} l ${-0.2 * W} 0 z`,
      fill: 'none',
      filter: 'url(#blur)',
    });
    svg.appendChild(glow);

    return glow;
  });
});

svg.addEventListener('mousemove', ({ offsetX, offsetY }: MouseEvent) => {
  glows.forEach((glows, row) => {
    const y = D + (H + D) * (row + 0.5);

    glows.forEach((glow, column) => {
      const x = D + (W + D) * (column + 0.5);

      const d = Math.hypot(offsetX - x, offsetY - y);
      const a = Math.pow(Math.max(0, RANGE - d) / RANGE, 2);
      glow.setAttribute('fill', `rgba(0, 255, 255, ${a})`);
    });
  });
});
