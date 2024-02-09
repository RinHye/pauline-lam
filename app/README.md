git clone git@github.com:RinHye/CV.git

npm install

Delete folder node_modules and package-lock.json file

docker-compose up --build



_____

Static build and its git :

npm run generate

cd .output/public

git remote add origin git@github.com:RinHye/rinhye.github.io.git

git init

git add *

git commit

git push --set-upstream origin main -f
