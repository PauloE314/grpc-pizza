// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contract_pb = require('./contract_pb.js');

function serialize_CreateUserRequest(arg) {
  if (!(arg instanceof contract_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserRequest(buffer_arg) {
  return contract_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateUserResponse(arg) {
  if (!(arg instanceof contract_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserResponse(buffer_arg) {
  return contract_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginRequest(arg) {
  if (!(arg instanceof contract_pb.LoginRequest)) {
    throw new Error('Expected argument of type LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginRequest(buffer_arg) {
  return contract_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginResponse(arg) {
  if (!(arg instanceof contract_pb.LoginResponse)) {
    throw new Error('Expected argument of type LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginResponse(buffer_arg) {
  return contract_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidationRequest(arg) {
  if (!(arg instanceof contract_pb.ValidationRequest)) {
    throw new Error('Expected argument of type ValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidationRequest(buffer_arg) {
  return contract_pb.ValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidationResponse(arg) {
  if (!(arg instanceof contract_pb.ValidationResponse)) {
    throw new Error('Expected argument of type ValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidationResponse(buffer_arg) {
  return contract_pb.ValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TomatoServiceService = exports.TomatoServiceService = {
  createUser: {
    path: '/TomatoService/createUser',
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.CreateUserRequest,
    responseType: contract_pb.CreateUserResponse,
    requestSerialize: serialize_CreateUserRequest,
    requestDeserialize: deserialize_CreateUserRequest,
    responseSerialize: serialize_CreateUserResponse,
    responseDeserialize: deserialize_CreateUserResponse,
  },
  login: {
    path: '/TomatoService/login',
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.LoginRequest,
    responseType: contract_pb.LoginResponse,
    requestSerialize: serialize_LoginRequest,
    requestDeserialize: deserialize_LoginRequest,
    responseSerialize: serialize_LoginResponse,
    responseDeserialize: deserialize_LoginResponse,
  },
  validateToken: {
    path: '/TomatoService/validateToken',
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.ValidationRequest,
    responseType: contract_pb.ValidationResponse,
    requestSerialize: serialize_ValidationRequest,
    requestDeserialize: deserialize_ValidationRequest,
    responseSerialize: serialize_ValidationResponse,
    responseDeserialize: deserialize_ValidationResponse,
  },
};

exports.TomatoServiceClient = grpc.makeGenericClientConstructor(TomatoServiceService);
