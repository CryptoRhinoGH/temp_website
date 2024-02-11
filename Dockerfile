FROM node:16

# Set the working directory in the container
WORKDIR /app

# Add node_module bin to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["tail -f /dev/null"]
