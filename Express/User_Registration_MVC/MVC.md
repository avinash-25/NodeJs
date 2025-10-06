## router.js file structure

- Destructure Router from express
```js
//! step --> 1
import {Router} from "express";
```
- call/invoke the top-level function.
```js
//! step --> 2
let router = Router();
```
- export the router variable
```js
//! step --> 3
export default router;
```

1. For every routes file every routes.js file
2. Import this `route.js` file in the main file.
3. Use the variable in middleware