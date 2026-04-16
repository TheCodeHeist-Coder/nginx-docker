FROM node:20-alpine

WORKDIR /app

RUN npm install -g typescript

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "start" ]