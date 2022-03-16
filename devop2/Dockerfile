FROM node:latest
WORKDIR app2
COPY package.json /app2
RUN npm install
COPY . /app2
CMD ["npm", "start"]
