var sourcesIndex = JSON.parse('{\
"arrow2":["",[["array",[["binary",[],["ffi.rs","fmt.rs","from.rs","iterator.rs","mod.rs","mutable.rs","mutable_values.rs"]],["boolean",[],["ffi.rs","fmt.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]],["dictionary",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs","mutable.rs"]],["equal",[],["binary.rs","boolean.rs","dictionary.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","map.rs","mod.rs","null.rs","primitive.rs","struct_.rs","union.rs","utf8.rs"]],["fixed_size_binary",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs","mutable.rs"]],["fixed_size_list",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs","mutable.rs"]],["growable",[],["binary.rs","boolean.rs","dictionary.rs","fixed_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","union.rs","utf8.rs","utils.rs"]],["list",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs","mutable.rs"]],["map",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs"]],["primitive",[],["ffi.rs","fmt.rs","from_natural.rs","iterator.rs","mod.rs","mutable.rs"]],["struct_",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs","mutable.rs"]],["union",[],["ffi.rs","fmt.rs","iterator.rs","mod.rs"]],["utf8",[],["ffi.rs","fmt.rs","from.rs","iterator.rs","mod.rs","mutable.rs","mutable_values.rs"]]],["ffi.rs","fmt.rs","iterator.rs","mod.rs","null.rs","ord.rs","physical_binary.rs","specification.rs"]],["bitmap",[["utils",[["chunk_iterator",[],["chunks_exact.rs","merge.rs","mod.rs"]]],["chunks_exact_mut.rs","fmt.rs","iterator.rs","mod.rs","slice_iterator.rs","zip_validity.rs"]]],["assign_ops.rs","bitmap_ops.rs","immutable.rs","iterator.rs","mod.rs","mutable.rs"]],["buffer",[],["immutable.rs","iterator.rs","mod.rs"]],["compute",[["aggregate",[["simd",[],["mod.rs","native.rs"]]],["memory.rs","min_max.rs","mod.rs","sum.rs"]],["arithmetics",[["basic",[],["add.rs","div.rs","mod.rs","mul.rs","pow.rs","rem.rs","sub.rs"]],["decimal",[],["add.rs","div.rs","mod.rs","mul.rs","sub.rs"]]],["mod.rs","time.rs"]],["cast",[],["binary_to.rs","boolean_to.rs","decimal_to.rs","dictionary_to.rs","mod.rs","primitive_to.rs","utf8_to.rs"]],["comparison",[["simd",[],["mod.rs","native.rs"]]],["binary.rs","boolean.rs","mod.rs","primitive.rs","utf8.rs"]],["merge_sort",[],["mod.rs"]],["sort",[["primitive",[],["indices.rs","mod.rs","sort.rs"]]],["binary.rs","boolean.rs","common.rs","lex_sort.rs","mod.rs","utf8.rs"]],["take",[],["binary.rs","boolean.rs","dict.rs","generic_binary.rs","list.rs","mod.rs","primitive.rs","structure.rs","utf8.rs"]]],["arity.rs","arity_assign.rs","bitwise.rs","boolean.rs","boolean_kleene.rs","concatenate.rs","contains.rs","filter.rs","hash.rs","if_then_else.rs","length.rs","like.rs","limit.rs","mod.rs","nullif.rs","partition.rs","regex_match.rs","substring.rs","temporal.rs","utf8.rs","utils.rs","window.rs"]],["datatypes",[],["field.rs","mod.rs","physical_type.rs","schema.rs"]],["ffi",[],["array.rs","bridge.rs","generated.rs","mmap.rs","mod.rs","schema.rs","stream.rs"]],["io",[["avro",[["read",[],["deserialize.rs","mod.rs","nested.rs","schema.rs","util.rs"]],["write",[],["mod.rs","schema.rs","serialize.rs"]]],["mod.rs"]],["csv",[["read",[],["deserialize.rs","infer_schema.rs","mod.rs","reader.rs"]],["read_async",[],["deserialize.rs","infer_schema.rs","mod.rs","reader.rs"]],["write",[],["mod.rs","serialize.rs"]]],["mod.rs","read_utils.rs","utils.rs"]],["flight",[],["mod.rs"]],["ipc",[["append",[],["mod.rs"]],["read",[["array",[],["binary.rs","boolean.rs","dictionary.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","map.rs","mod.rs","null.rs","primitive.rs","struct_.rs","union.rs","utf8.rs"]]],["common.rs","deserialize.rs","error.rs","file.rs","file_async.rs","mod.rs","read_basic.rs","reader.rs","schema.rs","stream.rs","stream_async.rs"]],["write",[],["common.rs","common_async.rs","common_sync.rs","file_async.rs","mod.rs","schema.rs","serialize.rs","stream.rs","stream_async.rs","writer.rs"]]],["compression.rs","endianess.rs","mod.rs"]],["json",[["read",[],["deserialize.rs","infer_schema.rs","mod.rs"]],["write",[],["mod.rs","serialize.rs","utf8.rs"]]],["mod.rs"]],["json_integration",[["read",[],["array.rs","mod.rs","schema.rs"]],["write",[],["array.rs","mod.rs","schema.rs"]]],["mod.rs"]],["ndjson",[["read",[],["deserialize.rs","file.rs","mod.rs"]],["write",[],["mod.rs"]]],["mod.rs"]],["odbc",[["read",[],["deserialize.rs","mod.rs","schema.rs"]],["write",[],["mod.rs","schema.rs","serialize.rs"]]],["mod.rs"]],["orc",[["read",[],["mod.rs"]]],["mod.rs"]],["parquet",[["read",[["deserialize",[["binary",[],["basic.rs","dictionary.rs","mod.rs","nested.rs","utils.rs"]],["boolean",[],["basic.rs","mod.rs","nested.rs"]],["dictionary",[],["mod.rs","nested.rs"]],["fixed_size_binary",[],["basic.rs","dictionary.rs","mod.rs","utils.rs"]],["primitive",[],["basic.rs","dictionary.rs","integer.rs","mod.rs","nested.rs"]]],["mod.rs","nested.rs","nested_utils.rs","null.rs","simple.rs","struct_.rs","utils.rs"]],["indexes",[],["binary.rs","boolean.rs","fixed_len_binary.rs","mod.rs","primitive.rs"]],["schema",[],["convert.rs","metadata.rs","mod.rs"]],["statistics",[],["binary.rs","boolean.rs","dictionary.rs","fixlen.rs","list.rs","map.rs","mod.rs","primitive.rs","struct_.rs","utf8.rs"]]],["file.rs","mod.rs","row_group.rs"]],["write",[["binary",[],["basic.rs","mod.rs","nested.rs"]],["boolean",[],["basic.rs","mod.rs","nested.rs"]],["nested",[],["def.rs","mod.rs","rep.rs"]],["primitive",[],["basic.rs","mod.rs","nested.rs"]],["utf8",[],["basic.rs","mod.rs","nested.rs"]]],["dictionary.rs","file.rs","fixed_len_bytes.rs","mod.rs","pages.rs","row_group.rs","schema.rs","sink.rs","utils.rs"]]],["mod.rs"]]],["iterator.rs","mod.rs","print.rs"]],["mmap",[],["mod.rs"]],["scalar",[],["binary.rs","boolean.rs","dictionary.rs","equal.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","struct_.rs","union.rs","utf8.rs"]],["types",[["simd",[],["mod.rs","native.rs"]]],["bit_chunk.rs","index.rs","mod.rs","native.rs","offset.rs"]],["util",[],["lexical.rs","mod.rs"]]],["chunk.rs","error.rs","lib.rs","temporal_conversions.rs","trusted_len.rs"]]\
}');
createSourceSidebar();
