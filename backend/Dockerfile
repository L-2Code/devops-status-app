# Schlankes Node-Image
FROM node:20-alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# package.json und lockfile zuerst kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm ci --omit=dev

# Restlichen Code kopieren
COPY . .

# Port dokumentieren
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]