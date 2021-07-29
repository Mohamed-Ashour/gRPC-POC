const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { PrismaClient } = require('@prisma/client');

const packageDefinition = protoLoader.loadSync('users.proto');
const usersProto = grpc.loadPackageDefinition(packageDefinition).users;
const prisma = new PrismaClient();

const AddUser = async (call, callback) => {
  const result = await prisma.user.create({
    data: {
      name: call.request.name,
    },
  });

  callback(null, result);
};

const server = new grpc.Server();

server.addService(usersProto.User.service, { AddUser });

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (port) => {
    server.start();
    console.log('server started ...');
  }
);
