FROM node:16-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY tsconfig.json ./

COPY app.ts ./

CMD ["yarn", "start"]