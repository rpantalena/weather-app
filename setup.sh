#!/bin/bash

echo "============================"
echo "Starting react-starter setup"
echo "============================"
echo ""

name=${PWD##*/}

read -p "Use $name as project name? (y/n): " name_confirm

if [[ $name_confirm == [yY] ]]
then
  echo "$name confirmed."
else
  echo ""
  read -p "Enter project name: " name
  read -p "Confirm? $name (y/n): " confirm && [[ $confirm == [yY] ]] || exit 1
fi

# Update package.json
sed -i "" "s/new-project/$name/g" package.json

# Update src/public/index.html
sed -i "" "s/new-project/$name/g" src/public/index.html

# Update src/components/App/index.tsx
sed -i "" "s/new-project/$name/g" src/components/App/index.tsx

# Remove react-starter .git
rm -rf .git

echo "Finished setup."
