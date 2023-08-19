# 确保脚本抛出遇到的错误
set -e

# 打包文档
npm run docs:build

# 提交修改到github
git add .
git commit -m '部署文档'
git push
