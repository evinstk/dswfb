FROM node:carbon
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN yarn global add serve
EXPOSE 5000
CMD serve -s build
