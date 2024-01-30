# Dockerfile
FROM node:20.11.0-alpine

# create destination directory
WORKDIR /var/www/html

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy package.json and package-lock.json to install dependencies
COPY ./package*.json ./
RUN npm install

# copy the rest of the application
COPY ./ ./

EXPOSE 3000

CMD [ "npm", "run", "dev" ]