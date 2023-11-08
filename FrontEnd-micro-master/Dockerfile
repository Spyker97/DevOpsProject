FROM node:14.18.0
WORKDIR /usr
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8099
CMD ["npm", "start"]