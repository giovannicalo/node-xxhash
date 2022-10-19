#include "xxh64.hpp"

Napi::Value nodeXxhash::xxh64(const Napi::CallbackInfo& info) {
	auto data = info[0].As<Napi::Uint8Array>();
	bool isLossless = false;
	return Napi::BigInt::New(info.Env(), XXH64(
		data.Data(),
		data.ByteLength(),
		!info[1].IsUndefined() ? info[1].As<Napi::BigInt>().Uint64Value(&isLossless) : 0
	));
}
