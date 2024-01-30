# Dockerfile
FROM node:14.21.3-alpine

# create destination directory
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy package.json and package-lock.json to install dependencies
COPY ./package*.json ./
RUN npm install

# copy the rest of the application
COPY . .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "dev" ]