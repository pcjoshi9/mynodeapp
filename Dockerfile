FROM node:12

WORKDIR /usr/src/app

RUN git clone https://github.com/pcjoshi9/base-core.git

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js"]

