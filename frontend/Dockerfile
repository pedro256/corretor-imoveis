FROM node:18.10 as development

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 4200

CMD ["npm", "start"]