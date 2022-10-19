#include "xxh128.hpp"

Napi::Value nodeXxhash::xxh128(const Napi::CallbackInfo& info) {
	auto data = info[0].As<Napi::Uint8Array>();
	auto hash = Napi::Buffer<uint8_t>::New(info.Env(), 16);
	bool isLossless = false;
	auto rawHash = XXH128(
		data.Data(),
		data.ByteLength(),
		!info[1].IsUndefined() ? info[1].As<Napi::BigInt>().Uint64Value(&isLossless) : 0
	);
	rawHash.high64 = XXH_swap64(rawHash.high64);
	rawHash.low64 = XXH_swap64(rawHash.low64);
	std::memcpy(hash.Data(), &rawHash.high64, 8);
	std::memcpy(hash.Data() + 8, &rawHash.low64, 8);
	return hash;
}
