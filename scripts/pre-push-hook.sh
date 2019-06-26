#!/bin/bash

currBranch=$(git rev-parse --abbrev-ref HEAD)

if [[ $currBranch =~ ^(master|uat|release)$ ]]; then
	# 3 default branches skip this script
	# return 0 as true
	exit 0
fi

if [[ $currBranch =~ ^(feat|spike|test|fix|refactor|docs)/.*$ ]]; then
	# return 0 as true
	exit 0
else
	echo ""
	echo "*******************  Notice ***************************"
	echo ""
	echo "Current branch name is: ${currBranch}"
	echo "Notice: Non-default branch name must begin with 'feat/','chore/','fix/','spike/','test/', 'refactor/', 'docs/'"
	echo ""
	echo "******************  Notcie ***************************"
	echo ""
	# return 1 as false
	exit 1
fi
