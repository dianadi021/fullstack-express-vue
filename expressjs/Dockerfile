# Stage 1: Build
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Stage 2: Production
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy built application from the build stage
COPY --from=build /app /app

# Set a non-root user
USER node

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
