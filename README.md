TypeScript Webpack Babel and Ts-Loader "react-refresh" Demo
===========================================================

不知道为什么，react-fresh不生效，每次修改代码后还是页面刷新（而不是局部更新）

https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/34

解决：
1. 在webpack.config.ts中设置`ts-loader`参数`transpileOnly: true`，只转换代码，不进行类型检查
2. 在'babel-loader'中禁用`require.resolve('react-refresh/babel')`，只依赖于`ReactRefreshWebpackPlugin`即可

参看ts-loader关于HMR的说明：https://github.com/TypeStrong/ts-loader#hot-module-replacement

```
npm install
npm run demo
```
