# FROM node:22-alpine as prod
# WORKDIR /App
# COPY package*.json ./
# RUN yarn install
# COPY . .
# RUN apk add --no-cache curl
# EXPOSE 4000
# CMD ["yarn","start"]

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn install && apk add --no-cache curl
EXPOSE 4001
ENTRYPOINT ["yarn","start"]









# FROM node:18-alpine

# WORKDIR /app

# # Creating a user and group
# RUN addgroup -S backend1 && adduser -S backend1usr -G backend1

# # Copy source code
# COPY . .

# # Install dependencies and build
# RUN yarn install && yarn run build

# # Fix file ownership (optional but recommended)
# RUN chown -R backend1usr:backend1 /app

# # Switch to non-root user
# USER backend1usr

# ENTRYPOINT ["yarn", "start"]










































# FROM node:18
# WORKDIR /app
# COPY . .
# RUN yarn install
# RUN yarn run build 
# ENTRYPOINT ["yarn","start"]



