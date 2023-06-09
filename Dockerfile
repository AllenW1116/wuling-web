# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy project files to the working directory
COPY . .

# Install project dependencies
RUN npm install

# Build the project
RUN npm run build

# Expose the port
EXPOSE 80

# Run the Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
