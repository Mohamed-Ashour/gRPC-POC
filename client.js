const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('users.proto');
const usersProto = grpc.loadPackageDefinition(packageDefinition).users;

const client = new usersProto.User(
  '0.0.0.0:50051',
  grpc.credentials.createInsecure()
);

client.AddUser({ name: 'yassin' }, function (err, response) {
  console.log(`Added "${response.name}" with id ${response.id}`);
});
