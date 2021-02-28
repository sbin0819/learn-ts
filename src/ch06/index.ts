import { createRangeIterable, RangeIterable, StringIterable } from './utils';

import { random, gen } from './utils';

const iter = gen();
while (true) {
  const { value, done } = iter.next(random(10, 1));
  if (done) break;
  console.log(value);
}
