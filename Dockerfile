FROM node:latest
EXPOSE 3333
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "dev"]