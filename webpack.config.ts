import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {Configuration} from 'webpack';

const config: Configuration & any = {
  mode: "development",
  entry: './src/entry.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader', options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                // should comment this line, otherwise we will have error when modifying
                // TypeError
                // module.hot.invalidate is not a function
                //
                // require.resolve('react-refresh/babel')
              ]
            }
          },
          {
            loader: 'ts-loader', options: {
              transpileOnly: true
            }
          }
        ]
      }]
  },
  plugins: [
    new HtmlWebpackPlugin() as any,
    new ReactRefreshWebpackPlugin(),
  ]
}

export default config;
