FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env ./

EXPOSE 3333

CMD ["npm", "run", "start"]