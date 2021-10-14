#!/usr/bin/env sh
# abort on errors
set -e

npm run build
cd dist
touch .nojekyll # add .nojekyll to bypass GitHub Page's default behavior
echo 'blog.devkr.info' > CNAME # if you are deploying to a custom domain

git init
git add -A
git commit -am "deploy"
git push https://github.com/coleea/coleea.github.io master --force

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:coleea/coleea.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:coleea/blog_githubPage.git main:gh-pages

cd -