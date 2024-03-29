#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run docs:build
npm run build
# 支持微信可访问
cp ./MP_verify_9RvbxRWFvPhDUHV6.txt ./dist
# 进入生成的文件夹
cd ./dist

# 如果是发布到自定义域名
# echo 'blog.medalwall.top' > CNAME

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/felix9ia/felix9ia.github.io.git  master:gh-pages

cd -