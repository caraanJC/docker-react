FROM node:alpine as build
WORKDIR /home/app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1-alpine
COPY --from=build /home/app/build /usr/share/nginx/html
COPY --from=build /home/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]