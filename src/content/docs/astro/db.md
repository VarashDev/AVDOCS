---
title: Astro DB
---

[AstroDB might be the easiest SQL setup you can get](https://www.youtube.com/watch?v=neXtt9HW9-8)

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
```diff title="db/seed.ts"
import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    { author: 'Bob', body: 'Hope you like Astro DB!' },
    { author: 'Mary, body: 'Enjoy!'},
  ])
}
```
```diff title="src/pages/index.astro"
---
import { db, Comment } from 'astro:db';

if (Astro.request.method === 'POST') {
  // Parse form data
  const formData = await Astro.request.formData();
  const author = formData.get('author');
  const body = formData.get('body');
  if (typeof author === 'string' && typeof body === 'string') {
    // Insert form data into the Comment table
    await db.insert(Comment).values({ author, body });
  }
}

// Render the new list of comments on each request
const comments = await db.select().from(Comment);
---

<form method="POST" style="display: grid">
  <label for="author">Author</label>
  <input id="author" name="author" />

  <label for="body">Body</label>
  <textarea id="body" name="body"></textarea>

  <button type="submit">Submit</button>
</form>

<!-- Render `comments` -->

<h2>Comments</h2>

{
  comments.map(({ author, body }) => (
    <article>
      <p>Author: {author}</p>
      <p>{body}</p>
    </article>
  ))
}
```
```diff title=""astro.config.mjs
integrations: [db()],
+ output: "server",