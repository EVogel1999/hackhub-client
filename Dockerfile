FROM nginx:alpine

COPY /dist/hackhub-client /usr/share/nginx/html

EXPOSE 80