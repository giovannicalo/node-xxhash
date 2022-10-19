#include "xxh32.hpp"

Napi::Value nodeXxhash::xxh32(const Napi::CallbackInfo& info) {
	auto data = info[0].As<Napi::Uint8Array>();
	return Napi::Number::New(info.Env(), XXH32(
		data.Data(),
		data.ByteLength(),
		!info[1].IsUndefined() ? info[1].As<Napi::Number>().Uint32Value() : 0
	));
}
