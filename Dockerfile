FROM node:13-slim

WORKDIR /app

ADD . /app

ENV PORT 8081

CMD node index.js
