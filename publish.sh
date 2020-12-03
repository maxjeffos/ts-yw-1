# Check if `dist` folder exists before calling lerna publish

if [[ -d "dist" ]]
then
    echo "dist directory exist. Proceeding with lerna publish..." 
else
    echo "dist directory does not exist - you need to run npm install first" 
fi

# npx lerna publish minor --yes
