
import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force date-fns to use a specific version
      "date-fns": path.resolve(__dirname, "node_modules/date-fns"),
    },
    dedupe: ['date-fns', 'react-day-picker']
  },
  // Optimize build output for production
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keeping console.log for debugging
        drop_debugger: true,
      },
    },
    // More precisely manage dependencies and warnings
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore specific warnings
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || 
            warning.message.includes('date-fns') ||
            warning.message.includes('peer dependency') ||
            warning.message.includes('react-day-picker')) {
          return;
        }
        warn(warning);
      },
      // Add externals to avoid duplications
      external: [],
      // Optimize bundle generation
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          dateFns: ['date-fns']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['date-fns', 'react-day-picker'],
    force: true,
    // Remove the problematic esbuildOptions that was causing the type error
  }
}));
