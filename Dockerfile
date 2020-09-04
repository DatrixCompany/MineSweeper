FROM node:current-slim as front-builder

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM nginx:latest
COPY --from=front-builder /usr/src/app/build /usr/share/nginx/html
