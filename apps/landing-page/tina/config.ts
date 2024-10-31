import { defineConfig } from 'tinacms'

const { HEAD, VERCEL_GIT_COMMIT_REF, TINACMS_CLIENT_ID, TINACMS_TOKEN } = process.env

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const branch = HEAD || VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: TINACMS_CLIENT_ID,
  token: TINACMS_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads'
    }
  },
  schema: {
    collections: []
  }
})
