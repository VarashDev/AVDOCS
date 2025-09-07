---
title: Create a project
---
```
npm create astro@latest
npx astro add tailwind
```
```diff title="src/pages/index.astro"
---
+ import "../styles/global.css";
---
+ h1 class="text-4xl text-teal-900 font-bold my-5"
```
`npm run dev`
