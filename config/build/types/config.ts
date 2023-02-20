export type BuildMode = 'development' | 'production'

interface BuildPaths {
  entry: string
  output: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}