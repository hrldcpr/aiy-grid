import 'sanitize.css';

import './index.scss';

const createSvgElement = (tag: string, attributes?: any) => {
  const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const k in attributes) {
    e.setAttribute(k, attributes[k]);
  }
  return e;
};

const svg = document.getElementById('wall')!;

svg.addEventListener(
  'mousemove',
  ({ offsetX: x, offsetY: y }: MouseEvent) => {}
);
