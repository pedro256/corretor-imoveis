
FROM node:14 AS development
WORKDIR /src/app

COPY package*.json ./

RUN npm install

RUN npm run start

EXPOSE 3000

# run app