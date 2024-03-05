/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TASK_LENGTH_LIMIT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
