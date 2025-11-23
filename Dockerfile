FROM node:20-alpine

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

