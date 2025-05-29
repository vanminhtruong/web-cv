#!/usr/bin/env sh

# Dừng script nếu có lỗi
set -e

# Build dự án
npm run build

# Di chuyển vào thư mục build
cd dist

# Nếu bạn đang triển khai lên tên miền tùy chỉnh
# echo 'www.example.com' > CNAME

# Khởi tạo git repository nếu chưa có
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Nếu bạn đang triển khai lên https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vanminhtruong/web-cv.git main:gh-pages

cd -
