import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
// import path from 'path';

// const SRC_PATH = path.resolve('src');
// const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'icons');

export default defineConfig({
  base: '/plumber', // Github
  server: {
    open: true,
  },
  build: {
    outDir: './build',
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
      },
      webp: {
        quality: 75,
      },
    }),
    // createSvgSpritePlugin({
    //   svgFolder: SVG_FOLDER_PATH,
    //   transformIndexHtmlTag: {
    //     injectTo: 'body',
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
