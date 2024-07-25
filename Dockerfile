# Use an official Node.js runtime as a base image
FROM node:18.8-alpine as base

# Stage 1: Build the application
FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Setup runtime environment
FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json ./
COPY package-lock.json ./
RUN npm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
