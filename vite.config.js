import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

const displayFontData = readFileSync(
  new URL('./public/fonts/google-sans-flex-display.woff2', import.meta.url),
).toString('base64')

function inlineStylesheet() {
  return {
    name: "inline-production-stylesheet",
    apply: "build",
    enforce: "post",
    transformIndexHtml(html, context) {
      if (!context.bundle) return html

      const cssAsset = Object.values(context.bundle).find(
        (asset) => asset.type === "asset" && asset.fileName.endsWith(".css"),
      )

      if (!cssAsset) return html

      const stylesheetTag = `<link rel="stylesheet" crossorigin href="/${cssAsset.fileName}">`
      const optimizedStyles = String(cssAsset.source).replace(
        '/fonts/google-sans-flex-display.woff2',
        `data:font/woff2;base64,${displayFontData}`,
      )

      return html.replace(stylesheetTag, `<style>${optimizedStyles}</style>`)
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  publicDir: isSsrBuild ? false : "public",
  plugins: [react(), tailwindcss(), inlineStylesheet()],
}))
