# lazer
A Library of Lazy Evaluation for JavaScript Array.

### How to use

```javascript
import Lazer from 'somewhere'

Lazer.from([2, 4, 8])
	.filter(i => i > 3)
	.map(i => i + 1)
	.reduce((a, c) => a + c)
// 14

```

### Why Lazer?

In general, `Lazer` is a little bit slower then `Array` because of its complexity, but `Lazer` can make you decrease a lot of memory usage.
