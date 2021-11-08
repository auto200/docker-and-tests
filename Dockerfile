FROM node:16-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json ./
COPY jest.config.js ./

COPY . .
