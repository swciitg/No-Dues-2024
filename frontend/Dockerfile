
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app
RUN npm install -g serve
# Copy our node module specification
COPY package* ./


# install node modules and build assets
RUN npm install --legacy-peer-deps
# Copy all files from current directory to working dir in image
# Except the one defined in '.dockerignore'
COPY . .

# Create production build of React App
RUN npm run build
RUN mkdir -p ./build/test/nodues
RUN mv ./build/static ./build/test/nodues/static
RUN mv ./build/*.json ./build/test/nodues/ \
    && mv ./build/*.ico ./build/test/nodues/ \
    && mv ./build/*.png ./build/test/nodues/ \
    && mv ./build/*.svg ./build/test/nodues/
