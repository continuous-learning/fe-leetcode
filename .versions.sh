#!/bin/bash

# 定义更新的版本类型,可取值为:patch, minor, major
VERSION_TYPE=$1

# 获取当前版本号
CURRENT_VERSION=$(node -p "require('./package.json').version")

# 根据版本类型计算新版本号 
case $VERSION_TYPE in
  "patch")
    NEW_VERSION=$(semver -i patch $CURRENT_VERSION)
    ;;
  "minor")
    NEW_VERSION=$(semver -i minor $CURRENT_VERSION) 
    ;;
  "major")
    NEW_VERSION=$(semver -i major $CURRENT_VERSION)
    ;;
  *)
    echo "版本类型必须是:patch, minor 或者 major"
    exit 1
    ;;
esac

# 更新 package.json 中的版本号
npm version $VERSION_TYPE --no-git-tag-version

echo "成功升级到版本号:v$NEW_VERSION"
