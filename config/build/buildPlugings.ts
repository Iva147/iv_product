import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugings({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  let plugings: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  const devPlugings: webpack.WebpackPluginInstance[] = [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]

  if(isDev) plugings = [...plugings, ...devPlugings]

  return plugings
}