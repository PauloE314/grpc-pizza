// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contract_pb = require('./contract_pb.js');

function serialize_CreateOrderRequest(arg) {
  if (!(arg instanceof contract_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateOrderRequest(buffer_arg) {
  return contract_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateOrderResponse(arg) {
  if (!(arg instanceof contract_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateOrderResponse(buffer_arg) {
  return contract_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchByUserRequest(arg) {
  if (!(arg instanceof contract_pb.FetchByUserRequest)) {
    throw new Error('Expected argument of type FetchByUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FetchByUserRequest(buffer_arg) {
  return contract_pb.FetchByUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchByUserResponse(arg) {
  if (!(arg instanceof contract_pb.FetchByUserResponse)) {
    throw new Error('Expected argument of type FetchByUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FetchByUserResponse(buffer_arg) {
  return contract_pb.FetchByUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FinishOrderRequest(arg) {
  if (!(arg instanceof contract_pb.FinishOrderRequest)) {
    throw new Error('Expected argument of type FinishOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FinishOrderRequest(buffer_arg) {
  return contract_pb.FinishOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FinishOrderResponse(arg) {
  if (!(arg instanceof contract_pb.FinishOrderResponse)) {
    throw new Error('Expected argument of type FinishOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FinishOrderResponse(buffer_arg) {
  return contract_pb.FinishOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MozzarellaServiceService = exports.MozzarellaServiceService = {
  createOrder: {
    path: '/MozzarellaService/createOrder',
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.CreateOrderRequest,
    responseType: contract_pb.CreateOrderResponse,
    requestSerialize: serialize_CreateOrderRequest,
    requestDeserialize: deserialize_CreateOrderRequest,
    responseSerialize: serialize_CreateOrderResponse,
    responseDeserialize: deserialize_CreateOrderResponse,
  },
  fetchByUser: {
    path: '/MozzarellaService/fetchByUser',
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.FetchByUserRequest,
    responseType: contract_pb.FetchByUserResponse,
    requestSerialize: serialize_FetchByUserRequest,
    requestDeserialize: deserialize_FetchByUserRequest,
    responseSerialize: serialize_FetchByUserResponse,
    responseDeserialize: deserialize_FetchByUserResponse,
  },
  finishOrder: {
    path: '/MozzarellaService/finishOrder',
    requestStream: false,
    responseStream: false,
    requestType: contract_pb.FinishOrderRequest,
    responseType: contract_pb.FinishOrderResponse,
    requestSerialize: serialize_FinishOrderRequest,
    requestDeserialize: deserialize_FinishOrderRequest,
    responseSerialize: serialize_FinishOrderResponse,
    responseDeserialize: deserialize_FinishOrderResponse,
  },
};

exports.MozzarellaServiceClient = grpc.makeGenericClientConstructor(MozzarellaServiceService);
