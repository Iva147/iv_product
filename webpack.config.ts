import * as webpack from "webpack";
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import path from 'path';
import {BuildEnv, BuildMode} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', "index.html")
  }

  const mode: BuildMode = env.mode || "development"
  const isDev = mode === "development"
  const PORT = env.port || 3000

  const webpackConfig: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return webpackConfig
}