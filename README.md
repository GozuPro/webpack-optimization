# Webpack optimization

I inherited an old React project which was using Webpack 2.6.1 and babel 6.23.0. The build was quite slow and didn't take advantage of most recent features. For this reason, I upgraded to Webpack 4.41.6 and babel 7.8.4. Everything seems to be working but I have an issue with the bundle size. In the past we used to have two files vendor.js (228kb) and app.js (209kb) and now we have one large file which is 2.3Mb. The size of these files are in Chrome (gzipped). Otherwise, on my computer the new file is 12.8 MB with production mode on. 

I would need some help to point me the right direction since I don't use Webpack enough. Please let me know if you see obvious errors. 

## Installation



```bash
npm install 
npm run build 
```

## Knowns

- Imports are all over the place.
- Some librairies could be optimized (lodash).


```js
import React, { Component } from 'react';
import TweenMax from 'gsap';
import _ from 'lodash';
```