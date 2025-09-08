---
title: Tailwind
---

```
npm init -y
npm install tailwindcss @tailwindcss/cli
```

```diff title="package.json"
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+    "watch:css": "npx @tailwindcss/cli -i ./static/css/src/input.css -o ./static/css/src/output.css --watch"
```
`npm run watch:css`