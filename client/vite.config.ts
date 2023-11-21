import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import { homedir } from 'os';
import { resolve } from 'path';

// https://vitejs.dev/config/
const viteServerConfig = (host: string) => {
  let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`)
  let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`)

  if (!fs.existsSync(keyPath)) {
      return {}
  }

  if (!fs.existsSync(certificatePath)) {
      return {}
  }

  return {
      hmr: {host},
      host,
      https: { 
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certificatePath),
      },
  }
}

export default defineConfig({
  server: viteServerConfig('oficina.exemax.ar'),
  plugins: [react()]
})

