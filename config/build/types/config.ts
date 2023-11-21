
export type BuldMode = "production" | "development";

export interface BuildPath {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuldMode
    port: number
}

export interface BuildOptions {
    mode: BuldMode
    paths: BuildPath
    isDev: boolean
    port: number
}