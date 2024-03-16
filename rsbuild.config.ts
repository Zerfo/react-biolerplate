import { defineConfig } from '@rsbuild/core';
import { pluginAssetsRetry } from '@rsbuild/plugin-assets-retry';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginSvgr({
			svgrOptions: {
				exportType: 'default',
			},
		}),
		pluginImageCompress([{ use: 'jpeg', test: /\.(?:jpg|jpeg|jpe)$/ }, 'ico']),
		pluginTypeCheck({
			enable: process.env.NODE_ENV === 'development',
		}),
		pluginAssetsRetry({
			onRetry: ({ times, domain, url, tagName }) => {
				console.info(
					`Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`
				);
			},
			onFail: ({ times, domain, url, tagName }) => {
				console.error(
					`Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`
				);
			},
		}),
	],
	html: {
		title: 'React App Boilerplate',
		template: './src/index.html',
		favicon: './src/assets/icons/favicon.ico',
		appIcon: './src/assets/icons/favicon-192x192.png',
		meta: {
			description:
				'React application boilerplate a focus on performance and best practices',
		},
	},
	source: {
		define: {
			'process.env': JSON.stringify(process.env),
			'process.env.IS_LOGGER': JSON.stringify(process.env.IS_LOGGER),
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		},
		alias: {
			assets: './src/assets',
			components: './src/components',
			constants: './src/constants',
			containers: './src/containers',
			hooks: './src/hooks',
			pages: './src/pages',
			store: './src/store',
			styles: './src/styles',
			types: './src/types',
			utils: './src/utils',
		},
	},
	output: {
		sourceMap: {
			js:
				process.env.NODE_ENV === 'production'
					? 'source-map'
					: 'cheap-module-source-map',
		},
	},
});
