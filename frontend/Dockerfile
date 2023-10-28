FROM node:18-alpine

WORKDIR /app/

EXPOSE 8000

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install
RUN npm install jquery
RUN npm install react-rating

CMD ["npm", "start"]