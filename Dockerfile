# STAGE 1
FROM node:14-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

RUN npm run build

# STAGE 2
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/. /usr/share/nginx/html

EXPOSE 80