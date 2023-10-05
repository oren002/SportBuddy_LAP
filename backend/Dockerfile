FROM node:14.20

USER root

WORKDIR /backend

EXPOSE 3000

RUN npm cache clean --force &&\
    npm install --legacy-peer-deps &&\
    npm install express &&\
    npm install mongoose &&\
    npm install dotenv --save &&\
    npm install cors &&\
    npm install jsonwebtoken &&\
    npm install bcrypt

COPY . .

ENV MONGODB_URI mongodb+srv://alonziferrante:Calimero99@mycluster.e7uo3oe.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
ENV SECRET_KEY Calimero99

CMD ["node", "server.js"]