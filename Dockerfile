FROM node:16-alpine

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000/tcp

# CMD ["node", "app.js"]
CMD node app.js