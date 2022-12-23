FROM node:12.10-slim as development

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 4200

CMD ["npm", "start"]