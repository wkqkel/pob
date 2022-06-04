import { MY_WORKS } from './DB';

const getCircleArray = (start: number) => {
  return MY_WORKS.slice(start, start + 6).reverse();
};

export { getCircleArray };
