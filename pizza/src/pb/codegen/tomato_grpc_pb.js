// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tomato_pb = require('./tomato_pb.js');

function serialize_CreateUserRequest(arg) {
  if (!(arg instanceof tomato_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserRequest(buffer_arg) {
  return tomato_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateUserResponse(arg) {
  if (!(arg instanceof tomato_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserResponse(buffer_arg) {
  return tomato_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginRequest(arg) {
  if (!(arg instanceof tomato_pb.LoginRequest)) {
    throw new Error('Expected argument of type LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginRequest(buffer_arg) {
  return tomato_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginResponse(arg) {
  if (!(arg instanceof tomato_pb.LoginResponse)) {
    throw new Error('Expected argument of type LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginResponse(buffer_arg) {
  return tomato_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidationRequest(arg) {
  if (!(arg instanceof tomato_pb.ValidationRequest)) {
    throw new Error('Expected argument of type ValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidationRequest(buffer_arg) {
  return tomato_pb.ValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ValidationResponse(arg) {
  if (!(arg instanceof tomato_pb.ValidationResponse)) {
    throw new Error('Expected argument of type ValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ValidationResponse(buffer_arg) {
  return tomato_pb.ValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TomatoServiceService = exports.TomatoServiceService = {
  createUser: {
    path: '/TomatoService/createUser',
    requestStream: false,
    responseStream: false,
    requestType: tomato_pb.CreateUserRequest,
    responseType: tomato_pb.CreateUserResponse,
    requestSerialize: serialize_CreateUserRequest,
    requestDeserialize: deserialize_CreateUserRequest,
    responseSerialize: serialize_CreateUserResponse,
    responseDeserialize: deserialize_CreateUserResponse,
  },
  login: {
    path: '/TomatoService/login',
    requestStream: false,
    responseStream: false,
    requestType: tomato_pb.LoginRequest,
    responseType: tomato_pb.LoginResponse,
    requestSerialize: serialize_LoginRequest,
    requestDeserialize: deserialize_LoginRequest,
    responseSerialize: serialize_LoginResponse,
    responseDeserialize: deserialize_LoginResponse,
  },
  validateToken: {
    path: '/TomatoService/validateToken',
    requestStream: false,
    responseStream: false,
    requestType: tomato_pb.ValidationRequest,
    responseType: tomato_pb.ValidationResponse,
    requestSerialize: serialize_ValidationRequest,
    requestDeserialize: deserialize_ValidationRequest,
    responseSerialize: serialize_ValidationResponse,
    responseDeserialize: deserialize_ValidationResponse,
  },
};

exports.TomatoServiceClient = grpc.makeGenericClientConstructor(TomatoServiceService);
