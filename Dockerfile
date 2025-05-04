FROM node:23.9-slim AS base
ENV NODE_NO_WARNINGS=1
RUN mkdir /app && mkdir /data && chown node:node /app && chown node:node /data
WORKDIR /app

FROM base AS dev
ENV NODE_ENV=development
RUN npm install -g pm2
USER node
VOLUME [ "/app" ]
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["pm2-runtime", "ecosystem.config.cjs"]

FROM base
ENV NODE_ENV=production
COPY index.mjs package.json ./
RUN npm install --omit=dev
COPY src src
USER node
CMD ["index.mjs" ]
