import path from 'path'
import webpack from 'webpack';

import { BuildEnv, BuildPath } from './config/build/types/config';
import { buildWebPackConfig } from './config/build/buildWebPackConfig';

export default (env: BuildEnv) => {

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebPackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};