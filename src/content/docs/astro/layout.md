---
title: Layout
---

```diff title="layouts/Layout.astro"
---
import "../styles/global.css";
const {title, description, url, type, site_name, ogimage} = Astro.props;
---
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>{title}</title>
		<meta name="description" content={description} />
		<link rel="canonical" href={url} />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description}>
		<meta property="og:url" content={url} />
		<meta property="og:type" content={type} />
		<meta property="og:site_name" content={site_name} />
		<meta property="og:image" content={ogimage} />
		<meta name="twitter:card" content="summary" />
		<meta property="twitter:image" content={ogimage} />
	</head>
	<body class="min-h-screen bg-amber-100">
		<main class="px-24 py-4 max-w-7xl mx-auto w-full max-sm:px-5">

            <slot />

            </main>
		<footer>
			<div class="bg-teal-500 p-4">
					<div class="grid gap-2 grid-cols-2 md:grid-cols-4 px-24 max-w-7xl mx-auto w-full max-sm:px-5 text-teal-900 text-lg font-semibold">
					<div><a href="/salmon/">Salmon</a></div>
					<div><a href="/steelhead/">Steelhead</a></div>
					<div><a href="/trout/">Trout</a></div>
					<div><a href="/bass/">Bass</a></div>
				</div>
			</div>
			<div class="bg-teal-700 p-4">
				<div class="grid gap-2 grid-cols-2 md:grid-cols-4 px-24 max-w-7xl mx-auto w-full max-sm:px-5 text-white text-lg font-semibold">
					<div><a href="https://portland.oregonfishingforum.com">Portland</a></div>
					<div><a href="https://eugene.oregonfishingforum.com">Eugene</a></div>
					<div><a href="https://salem.oregonfishingforum.com">Salem</a></div>
					<div><a href="https://gresham.oregonfishingforum.com">Gresham</a></div>
				</div>
			</div>
			<div class="bg-teal-900 text-white text-center p-4">© 2006-2025 <a href="https://www.oregonfishingforum.com">Oregon Fishing Forum</a></div>
		</footer>
	</body>
</html>

<style is:global>
	p {margin-bottom:16px;}
	h2 {font-size: 1.875rem; line-height: 2.25rem; color: oklch(0.386 0.063 188.416); font-weight: 800; margin-top: 16px; margin-bottom: 16px;}
	h3 {font-size: 1.5rem; line-height: 2rem; color: oklch(0.386 0.063 188.416); font-weight: 700; margin-top: 16px; margin-bottom: 16px;}
</style>
```
```diff title="src/pages/index.astro "
---
import Layout from "../layouts/Layout.astro";
import srcImage from "../assets/fishing-near-portland-oregon.webp";
import { Image } from "astro:assets";
---
<Layout 
title="Fishing near Portland, Oregon"
description="Discover the top places for fishing near Portland, Oregon, in this 2025 guide. Learn about rivers, lakes, gear tips, licenses, and more."
url="https://portland.oregonfishingforum.com/"
type="website"
site_name="Oregon Fishing Forum"
ogimage={srcImage.src}
>
    <center>
			<MyH1 text="Fishing near Portland, Oregon" />
			<p class="mb-4">Discover the top places for fishing near Portland, Oregon, in this 2025 guide. Learn about 
				rivers, lakes, gear tips, licenses, and more.</p>

			<Image
				src={srcImage}
				alt="Fishing near Portland, Oregon"
				loading={"eager"}
				fetchpriority={"high"}
				/>
				<br>
			</center>

</Layout>
```
`npm run dev`