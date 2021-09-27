initSidebarItems({"enum":[["AnyValue",""],["ArrowDataType","The set of supported logical types. Each variant uniquely identifies a logical type, which define specific semantics to the data (e.g. how it should be represented). Each variant has a corresponding [`PhysicalType`], obtained via [`DataType::to_physical_type`], which declares the in-memory representation of data. The [`DataType::Extension`] is special in that it augments a [`DataType`] with metadata to support custom types. Use `to_logical_type` to desugar such type and return its correspoding logical type."],["DataType",""],["FillNullStrategy",""],["JoinType",""],["PolarsError",""],["RankMethod",""],["TakeIdx","One of the three arguments allowed in unchecked_take"],["TakeRandBranch2",""],["TakeRandBranch3",""],["TimeUnit","The time units defined in Arrow."]],"fn":[["naive_date_to_date32",""],["naive_datetime_to_date32",""],["naive_datetime_to_date64",""]],"mod":[["builder",""],["datatypes","Data types supported by Polars."]],"struct":[["ArrowField","A logical [`DataType`] and its associated metadata per Arrow specification"],["ArrowSchema","An ordered sequence of [`Field`] with optional metadata."],["BoolTakeRandom",""],["BoolTakeRandomSingleChunk",""],["BooleanChunkedBuilder",""],["BooleanType",""],["CategoricalType",""],["ChunkedArray","ChunkedArray"],["DataFrame",""],["Date32Type",""],["Date64Type",""],["Field",""],["Float32Type",""],["Float64Type",""],["Int16Type",""],["Int32Type",""],["Int64Type",""],["Int8Type",""],["ListBooleanChunkedBuilder",""],["ListPrimitiveChunkedBuilder",""],["ListTakeRandom",""],["ListTakeRandomSingleChunk",""],["ListType",""],["ListUtf8ChunkedBuilder",""],["NumTakeRandomChunked",""],["NumTakeRandomCont",""],["NumTakeRandomSingleChunk",""],["ObjectArray",""],["ObjectTakeRandom",""],["ObjectTakeRandomSingleChunk",""],["ObjectType",""],["PrimitiveChunkedBuilder",""],["RollingOptions",""],["Schema",""],["Series","Series"],["Time64NanosecondType",""],["UInt16Type",""],["UInt32Type",""],["UInt64Type",""],["UInt8Type",""],["Utf8ChunkedBuilder",""],["Utf8TakeRandom",""],["Utf8TakeRandomSingleChunk",""],["Utf8Type",""]],"trait":[["ArgAgg","Argmin/ Argmax"],["AsNaiveDate",""],["AsNaiveDateTime",""],["ChunkAgg","Aggregation operations"],["ChunkAggSeries","Aggregations that return Series of unit length. Those can be used in broadcasting operations."],["ChunkAnyValue",""],["ChunkApply","Fastest way to do elementwise operations on a ChunkedArray when the operation is cheaper than branching due to null checking"],["ChunkApplyKernel","Apply kernels on the arrow array chunks in a ChunkedArray."],["ChunkBytes",""],["ChunkCast","Cast `ChunkedArray<T>` to `ChunkedArray<N>`"],["ChunkCompare","Compare Series and ChunkedArray’s and get a `boolean` mask that can be used to filter rows."],["ChunkCumAgg",""],["ChunkExpandAtIndex","Create a new ChunkedArray filled with values at that index."],["ChunkExplode","Explode/ flatten a"],["ChunkFillNull","Replace None values with various strategies"],["ChunkFillNullValue","Replace None values with a value"],["ChunkFilter","Filter values by a boolean mask."],["ChunkFull","Fill a ChunkedArray with one value."],["ChunkFullNull",""],["ChunkOps",""],["ChunkPeaks","Find local minima/ maxima"],["ChunkReverse","Reverse a ChunkedArray"],["ChunkRollApply","This differs from ChunkWindowCustom and ChunkWindow by not using a fold aggregator, but reusing a `Series` wrapper and calling `Series` aggregators. This likely is a bit slower than ChunkWindow"],["ChunkSet","Create a `ChunkedArray` with new values by index or by boolean mask. Note that these operations clone data. This is however the only way we can modify at mask or index level as the underlying Arrow arrays are immutable."],["ChunkShift",""],["ChunkShiftFill","Shift the values of a ChunkedArray by a number of periods."],["ChunkSort","Sort operations on `ChunkedArray`."],["ChunkTake","Fast access by index."],["ChunkTakeEvery","Traverse and collect every nth element"],["ChunkUnique","Get unique values in a `ChunkedArray`"],["ChunkVar","Variance and standard deviation aggregation."],["ChunkZip","Combine 2 ChunkedArrays based on some predicate."],["ChunkedBuilder",""],["Interpolate",""],["IntoNoNullIterator","Trait for ChunkedArrays that don’t have null values. The result is the most efficient implementation `Iterator`, according to the number of chunks."],["IntoSeries",""],["IntoTakeRandom","Create a type that implements a faster `TakeRandom`."],["IntoVec",""],["IsFirst",""],["IsIn","Check if element is member of list array"],["IsLast",""],["LhsNumOps",""],["ListBuilderTrait",""],["NamedFrom",""],["NewChunkedArray",""],["NumComp",""],["NumOpsDispatch",""],["NumOpsDispatchChecked",""],["PolarsDataType",""],["PolarsFloatType",""],["PolarsIntegerType",""],["PolarsIterator","A `PolarsIterator` is an iterator over a `ChunkedArray` which contains polars types. A `PolarsIterator` must implement `ExactSizeIterator` and `DoubleEndedIterator`."],["PolarsNumericType",""],["PolarsObject","Values need to implement this so that they can be stored into a Series and DataFrame"],["PolarsObjectSafe","Trimmed down object safe polars object"],["PolarsPrimitiveType",""],["PolarsSingleType","Any type that is not nested"],["Pow",""],["Reinterpret",""],["RepeatBy","Repeat the values `n` times."],["SeriesTrait",""],["TakeIterator",""],["TakeIteratorNulls",""],["TakeRandom","Random access"],["TakeRandomUtf8",""],["ToDummies",""],["ToPolarsType",""],["VarAggSeries",""],["VecHash",""]],"type":[["AlignedVec",""],["BooleanChunked",""],["CategoricalChunked",""],["Date32Chunked",""],["Date64Chunked",""],["Dummy","Dummy type, we need to instantiate all generic types, so we fill one with a dummy."],["Float32Chunked",""],["Float64Chunked",""],["Int16Chunked",""],["Int32Chunked",""],["Int64Chunked",""],["Int8Chunked",""],["LargeListArray",""],["LargeStringArray",""],["ListChunked",""],["ObjectChunked",""],["PlHashMap",""],["PlHashSet",""],["Result",""],["SchemaRef",""],["Time64NanosecondChunked",""],["UInt16Chunked",""],["UInt32Chunked",""],["UInt64Chunked",""],["UInt8Chunked",""],["Utf8Chunked",""]]});