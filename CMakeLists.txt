cmake_minimum_required(VERSION 3.21.0)

project("node-xxhash" VERSION 0.0.0)

set(CMAKE_CXX_STANDARD 23)

set(CMAKE_POSITION_INDEPENDENT_CODE ON)

if(MSVC)
	set(CMAKE_CXX_FLAGS_DEBUG "/MTd /Zi")
	set(CMAKE_CXX_FLAGS_RELEASE "/MT")
	set(WITH_CRT_DLL FALSE)
endif()

include_directories(${CMAKE_JS_INC})

add_definitions(-DNAPI_VERSION=8)

file(GLOB_RECURSE source "source/native/*")

add_library(${PROJECT_NAME} SHARED ${source} ${CMAKE_JS_SRC})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")

execute_process(
	COMMAND node -p "require(\"node-addon-api\").include"
	WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
	OUTPUT_VARIABLE nodeAddonApi
)

string(REGEX REPLACE "[\n\r\"]" "" nodeAddonApi ${nodeAddonApi})

add_subdirectory("libraries/xxhash/cmake_unofficial" EXCLUDE_FROM_ALL)

target_include_directories(${PROJECT_NAME} PRIVATE ${nodeAddonApi} "libraries/xxhash")

target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} xxhash)
