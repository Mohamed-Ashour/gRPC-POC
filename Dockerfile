
FROM node:12.4.0
ENV NODE_ENV development
WORKDIR /code
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --quiet
RUN npm install -g nodemon prisma
COPY . .
RUN prisma migrate dev
CMD ["bash"]
