FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y \
    imagemagick \
    webp \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install && npm install -g qrcode-terminal

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
