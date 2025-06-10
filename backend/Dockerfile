FROM node:22

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build || echo "skip if no build step"

CMD ["npm", "run", "dev"]
