#include "xxh3.hpp"

Napi::Value nodeXxhash::xxh3(const Napi::CallbackInfo& info) {
	auto data = info[0].As<Napi::Uint8Array>();
	bool isLossless = false;
	return Napi::BigInt::New(info.Env(), XXH3_64bits_withSeed(
		data.Data(),
		data.ByteLength(),
		!info[1].IsUndefined() ? info[1].As<Napi::BigInt>().Uint64Value(&isLossless) : 0
	));
}
