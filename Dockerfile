FROM node:16.14.0 as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

EXPOSE 4200

CMD ["npm", "start"]