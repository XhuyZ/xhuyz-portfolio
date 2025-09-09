# ---- Build stage ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manifests and install deps
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build Astro project
RUN npm run build

# ---- Production stage ----
FROM nginx:alpine AS runner

# Copy built static files to nginx html dir
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

