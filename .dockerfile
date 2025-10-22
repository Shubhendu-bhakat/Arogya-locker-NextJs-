###########
# 1) Base
###########
FROM node:18-alpine AS base
WORKDIR /app
############
# 2) Deps
############
FROM base AS deps
# Install dependencies (keep dev deps for building in next stage)
COPY package.json package-lock.json* ./
RUN npm ci

##############
# 3) Builder
##############
FROM base AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generate Prisma client if present
RUN if [ -d "prisma" ]; then npx prisma generate; fi
# Build Next.js
RUN npm run build

#############
# 4) Runner
#############
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Copy only necessary runtime artifacts
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/package.json ./
COPY --from=deps    /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma

# Prisma client is already generated in builder; keep engine compatibility on alpine
# Start the app
EXPOSE 3000
CMD ["npm", "run", "start"]


