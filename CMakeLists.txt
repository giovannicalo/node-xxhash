cmake_minimum_required(VERSION 3.21.0)

project("node-xxhash" VERSION 0.0.0)

set(CMAKE_CXX_STANDARD 23)

set(CMAKE_POSITION_INDEPENDENT_CODE ON)

if(MSVC)
	set(CMAKE_CXX_FLAGS_DEBUG "/Zi")
	set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")
endif()

add_definitions(-DNAPI_VERSION=8)

include(ExternalProject)

ExternalProject_Add(
	xxhashProject
	BUILD_COMMAND cmake --build . --config ${CMAKE_BUILD_TYPE}
	CMAKE_ARGS -DBUILD_SHARED_LIBS=OFF -DCMAKE_POSITION_INDEPENDENT_CODE=ON -DXXHASH_BUILD_XXHSUM=OFF
	GIT_REPOSITORY "https://github.com/Cyan4973/xxHash.git"
	GIT_SHALLOW TRUE
	GIT_TAG "v0.8.2"
	INSTALL_COMMAND ""
	SOURCE_SUBDIR "cmake_unofficial"
)

file(GLOB_RECURSE source "source/native/*")

add_library(${PROJECT_NAME} SHARED ${source} ${CMAKE_JS_SRC})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

execute_process(
	COMMAND node -p "require(\"node-addon-api\").include"
	WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
	OUTPUT_VARIABLE nodeAddonApi
)

string(REGEX REPLACE "[\n\r\"]" "" nodeAddonApi ${nodeAddonApi})

ExternalProject_Get_Property(xxhashProject BINARY_DIR SOURCE_DIR)

target_include_directories(${PROJECT_NAME} PRIVATE ${CMAKE_JS_INC} ${nodeAddonApi} ${SOURCE_DIR})

target_link_directories(${PROJECT_NAME} PRIVATE ${BINARY_DIR})

target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} xxhash)
