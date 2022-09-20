FROM node:16-alpine

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000/tcp
EXPOSE 3001/tcp
EXPOSE 3002/tcp

CMD ["node", "app.js"]