
FROM node:12.4.0
WORKDIR /code
COPY . .
RUN npm install
RUN npm install -g prisma

CMD ["bash"]
