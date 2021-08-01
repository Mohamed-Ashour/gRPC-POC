# gRPC-POC

This is a proof of concept of gRPC, a simple client send a request to a simple server to create a user and save it in the DB, and return it's id.

## Getting started
rename `.env-example` to `.env`
### run the server
`docker-compose up`
### db migration (first run only)
`docker exec -it grpc-poc_server_1 sh -c "prisma migrate dev"`
### run the client
`npm install`
`node client`
