FROM node:10 as node

COPY ng-uikit-pro-standard-8.9.0.tgz package.json package-lock.json ./
RUN npm ci && mkdir /app && mv ./node_modules ./app
WORKDIR /app

COPY . .
RUN npm install
RUN npm run-script build
RUN npm run ng build -- --prod --output-path=dist --output-hashing=all

FROM nginx
COPY conf/nginx.conf /etc/opt/rh/rh-nginx112/nginx/nginx.conf
#RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /opt/app-root/src/*
COPY --from=node /app/dist /opt/app-root/src/
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]

