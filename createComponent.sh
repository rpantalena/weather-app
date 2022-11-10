#!/bin/bash

echo "=============================="
echo "Create Component Helper Script"
echo "=============================="
echo ""

read -p "Component Name? (ex. InputField) " name

mkdir ./src/components/$name
touch ./src/components/$name/index.tsx
touch ./src/components/$name/index.css

#define the template.
cat >./src/components/$name/index.tsx << EOF
import React from "react";
import './index.css';


const ${name} = () => (
  <div className="container">
    <h1>${name}</h1>
  </div>
);

export default ${name};
EOF

echo "Create $name component!"
