FROM node:23-slim AS base
ENV NODE_NO_WARNINGS=1 \
    TALKOPS_SOCKET=/tmp/talkops.sock \
    TALKOPS_STDERR=/tmp/talkops.stderr.log \
    TALKOPS_STDOUT=/tmp/talkops.stdout.log
RUN npm install -g pm2@6.0.6 talkops-client@1.0.2 && \
    mkdir /app && \
    mkdir /data && \
    chown node:node /app && \
    chown node:node /data
WORKDIR /app

FROM base AS dev
USER node
VOLUME [ "/app" ]
ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["pm2-runtime", "ecosystem.dev.config.cjs"]

FROM base AS prod
COPY ecosystem.prod.config.cjs package.json ./
RUN npm install --omit=dev
COPY src src
USER node
CMD ["pm2-runtime", "ecosystem.prod.config.cjs"]
