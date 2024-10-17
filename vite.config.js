import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import postcssPxToViewport from 'postcss-px-to-viewport'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 路由别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
    ]
  },
  // 浏览器适配
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375,
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
        }),
      ],
    },
  },
  
  
})
