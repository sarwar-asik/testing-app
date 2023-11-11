### Testing with react vite app

#### create a react app

```bash
npm create vite@latest
```

### Install the package :::

```bash
yarn add vitest jsdom @testing-library/jest-dom -D
npm i @testing-library/react
npm i --save-dev @types/mocha
```

##### create a file src>setupTest.ts :::

```ts
import "@testing-library/jest-dom";
```

#### update vite.config.ts :::

- add 2 in top

```ts
///  <reference types="vitest"/>
///  <reference types="vite/client"/>
```

- create a test in defineConfig

```ts
 test:{
    globals:true,
    environment:"jsdom",
    setupFiles:["./src/setupTest.ts"]
  }
```

- the vite.config.ts

```ts
///  <reference types="vitest"/>
///  <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
  },
});
```

#### includes "types" in tsconfig.json in bottom

```json

  "references": [{ "path": "./tsconfig.node.json" }],
  "types":["vitest/globals"]
```
