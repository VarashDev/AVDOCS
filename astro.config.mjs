// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AV Docs',
			sidebar: [
				{
					label: 'Astro',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Create a project', slug: 'astro/create-project' },
						{ label: 'Layout', slug: 'astro/layout' },
					],
				},
				{
					label: 'Starlight',
										items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Create a project', slug: 'starlight/create-project' },
						{ label: 'Sidebar navigation', slug: 'starlight/sidebar-navigation' },
						{ label: 'Github', slug: 'starlight/github' },
						{ label: 'Depploy to Netlify', slug: 'starlight/deploy-netlify' },
					],
				},
			],
		}),
	],
});
