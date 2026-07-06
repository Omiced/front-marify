import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login/login.html"),
        artists: resolve(__dirname, "artists/artists.html"),
        albums: resolve(__dirname, "albums/albums.html"),
      },
    },
  },
});
