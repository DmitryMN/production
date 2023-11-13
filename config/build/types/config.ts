
export type BuldMode = "production" | "development";

export interface BuildPath {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: BuldMode
    paths: BuildPath
    isDev: boolean
}