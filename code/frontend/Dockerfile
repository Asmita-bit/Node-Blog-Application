# Build Stage
FROM node:18 AS build
WORKDIR /app
COPY package.json yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:latest AS prod
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]







