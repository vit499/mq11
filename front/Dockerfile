FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve@13.0.2

#RUN serve -s build -l 31002
