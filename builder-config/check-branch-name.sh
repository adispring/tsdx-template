#!/bin/bash

branch=$(git symbolic-ref --short -q HEAD)

reg='^((feat|fix|docs|refactor|test)(/|-).*)|(master|beta|alpha|develop)$'

if [[ "$branch" =~ $reg ]];
then
    exit 0
else
    echo '\033[31m 请使用规范的分支名称 \033[0m';
    echo '\033[40;37m (feat|fix|docs|refactor|test)/.* \033[0m';
    exit 1
fi
