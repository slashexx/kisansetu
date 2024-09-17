FROM node:lts-alpine

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install only production dependencies
RUN npm install --production --silent

# Copy the rest of the application
COPY . .

# Set proper permissions
RUN chown -R node /usr/src/app

# Switch to non-root user for security
USER node

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
