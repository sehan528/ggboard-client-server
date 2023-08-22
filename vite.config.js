import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'routes/app.html'),
				// nested: resolve(__dirname, 'nested/index.html'),
			},
		},
	},
});

// export default defineConfig({
// 	build: {
// 		rollupOptions: {
// 			input: {
// 				main: resolve(__dirname, 'index.html'),
// 				nested: resolve(__dirname, 'nested/index.html'),
// 			},
// 		},
// 	},
// })