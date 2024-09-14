FROM node:20 as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

COPY . .

RUN yarn
RUN yarn build

FROM node:20 as runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .

EXPOSE 3000

CMD [ "yarn", "start:migrate:prod" ]
