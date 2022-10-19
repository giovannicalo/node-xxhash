#include <napi.h>

#include "xxh3.hpp"
#include "xxh32.hpp"
#include "xxh64.hpp"
#include "xxh128.hpp"

Napi::Object initialize(Napi::Env environment, Napi::Object exports) {
	exports["xxh3"] = Napi::Function::New(environment, nodeXxhash::xxh3);
	exports["xxh32"] = Napi::Function::New(environment, nodeXxhash::xxh32);
	exports["xxh64"] = Napi::Function::New(environment, nodeXxhash::xxh64);
	exports["xxh128"] = Napi::Function::New(environment, nodeXxhash::xxh128);
	return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, initialize)
