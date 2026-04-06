# Base image để build React app
FROM node:24

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ mã nguồn và build
COPY . .
RUN npm run build

# Cài đặt serve để chạy app
RUN npm install -g serve

# Expose port mặc định của serve
EXPOSE 5173

# Chạy app React build bằng serve
CMD ["serve", "-s", "build", "-l", "5173"]
