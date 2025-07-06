# FROM node:22-alpine as prod
# WORKDIR /App
# COPY package*.json ./
# RUN yarn install
# COPY . .
# RUN apk add --no-cache curl
# EXPOSE 4001
# CMD ["yarn","start"]



FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install && apk add --no-cache curl
EXPOSE 4001
ENTRYPOINT ["yarn","start"]

