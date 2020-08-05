FROM node:alpine

# Set working directory
WORKDIR /app

# Install and cache app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
#RUN npm audit fix

# Add app
COPY . ./

# Start app
CMD sleep infinity