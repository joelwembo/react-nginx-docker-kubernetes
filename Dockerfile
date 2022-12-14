# Development

# FROM node:16.3.0-alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# EXPOSE 3000

# RUN npm install
# RUN npm run build
# CMD ["npm", "run", "start"]


#Production

FROM node:16.3.0-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production
# Copy app files
COPY . .
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
EXPOSE 31009
# Start nginx
CMD ["nginx", "-g", "daemon off;"]