# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 读取package.json中的version
version=`jq -r .version package.json`

# 打包构建
npm run build

# 发布到npm，pnpm(高性能的npm)
npm publish

# 升级 j-element 依赖版本
# npm up j-element@$version

# 提交版本更新代码到github
git add .
git cm -m "升级版本 $version"
git push
