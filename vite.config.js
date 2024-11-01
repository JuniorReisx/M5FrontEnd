import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TechNBlack',
        short_name: 'TechNBlack',
        description: 'Descrição do PWA',
        theme_color: '#000',
        background_color: '#ffffff',
        display: 'fullscreen',
        start_url: '/',
        icons: [
          {
            src: '/public/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/public/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
