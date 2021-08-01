
FROM node:12.4.0
WORKDIR /code
# COPY ["package.json", "package-lock.json*", "./"]
COPY . .
RUN npm install
RUN npm install -g prisma

CMD ["bash"]
