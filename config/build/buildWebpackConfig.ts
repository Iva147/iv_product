import * as webpack from 'webpack';
import {buildResolver} from './buildResolver';
import {buildLoaders} from './buildLoaders';
import {buildPlugings} from './buildPlugings';
import {BuildOptions} from './types/config';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options

  return {
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    mode,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolver(options),
    plugins: buildPlugings(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}