FROM node:12.19-alpine

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
RUN npm i

CMD npm start