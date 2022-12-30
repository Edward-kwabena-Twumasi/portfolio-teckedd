FROM node:12

WORKDIR /portfolios

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
