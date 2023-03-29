import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue','vue-router'],
      dts: 'src/auto-import.d.ts'
    })
  ],
  resolve: {
    //设置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  //设置代理,处理请求跨域问题,请求url携带 /api的默认是连接  http://localhost:8060
  server: {
    proxy:{
      '/api': 'http://localhost:8060'
    }
  }
});
