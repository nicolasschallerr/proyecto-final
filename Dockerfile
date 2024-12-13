FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 8080

# Start app
CMD ["npm", "start"]
