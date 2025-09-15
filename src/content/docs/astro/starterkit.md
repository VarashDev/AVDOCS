---
title: Starter Kit
---

```
npm create astro@latest
npx astro add tailwind
```
## Astro DB

`npx astro add db`

```diff title="db/config.ts"
import { defineDb, defineTable, column } from 'astro:db';

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
  }
})

export default defineDb({
  tables: { Comment },
})
```

## Turso
Go to Turso, create db (east us Virginia)

``` diff title=".env"
ASTRO_DB_REMOTE_URL=libsql://andromeda-houston.turso.io
ASTRO_DB_APP_TOKEN=eyJhbGciOiJF...3ahJpTkKDw
```
Push your DB schema and metadata to the new Turso database.
npx? `astro db push --remote`

```diff title="package.jason"
{
  "scripts": {
    "build": "astro build --remote"
  }
}
```
 Develop with a remote connection
astro dev --remote

```diff title="astro.config.mjs"
integrations: [db()],
 output: "server",
 ```

 ## Clerk
 `npm install @clerk/astro`
 ```diff title="src/pages/index.astro"
 ---
import Layout from 'src/layouts/Base.astro';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/astro/components';

export const prerender = false; // Not needed in 'server' mode
---

<Layout>
    <SignedIn>
        <UserButton />
    </SignedIn>
    <SignedOut>
        <SignInButton />
    </SignedOut>
</Layout>
```
Go to Clerk, create an app, add data to .env.

## Netlify
`npx astro add netlify`
```diff title="astro.config.mjs"
 import { defineConfig } from 'astro/config';
 import netlify from '@astrojs/netlify';

 export default defineConfig({
    // ...
    adapter: netlify(),
 });
 ```
## GitHub
`+ -> New Repository`

Type in the "Repository name" and hit the "Create repository" button.

### Commit your local code to GitHub
In VSCodee go to the "Source Control" tab, hit the 3 dots at the top of left navigation (CHANGES)-> Remote > Add Remote.
Select "Add remote from GitHub".
Choose the one you created for this project. 
After it type in the Repository name.
Type in Commit message and hit the Commit button. 
Click the Publish button.

### push error 
```
git config http.postBuffer 524288000
git pull && git push
```

## Deploy to Netlify
Add “New Project” button, “Import an existing project”, “GitHub”. Link “Configure the Netlify app on GitHub” at the bottom, “Select repository”, “Save”. Click the selected project in projects list, type in “Project name”, hit the “Deploy” button.
