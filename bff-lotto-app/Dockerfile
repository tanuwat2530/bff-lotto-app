# --- STAGE 1: Build the React Application ---
# Use the official Node.js 20 image as the base for building.
# The 'alpine' version is lightweight.
FROM node:20.19.3-slim

# Set the working directory inside the container
WORKDIR /app/bff-lotto-app/

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package*.json /app/bff-lotto-app/

# Install project dependencies
RUN yarn install

# Copy the rest of the application source code into the container
COPY . /app/bff-lotto-app/

# Expose port 8080 to Cloud Run
EXPOSE 8080

CMD ["yarn", "start"]