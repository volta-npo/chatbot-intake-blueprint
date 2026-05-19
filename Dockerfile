# syntax=docker/dockerfile:1
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine
LABEL org.opencontainers.image.title="Chatbot Intake Blueprint"
LABEL org.opencontainers.image.description="A safe blueprint for building small-business chatbots that answer FAQs without pretending to be human experts."
LABEL org.opencontainers.image.source="https://github.com/volta-npo/chatbot-intake-blueprint"
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
