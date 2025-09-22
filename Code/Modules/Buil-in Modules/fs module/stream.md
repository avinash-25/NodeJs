## Streams :

- stream in nodeJS are used to transfer data from source to destination.
- Transferring thr data from source to destination in continuous chunks(or pieces of data) is called as streaming.

**In nodeJS there are total 4 types of streams.**

1. Readable streams.

   - It is used to read the data in continuous chunks.
   - Method name : **_createReadStream()_**
   - this createReadStream() emits ans event --> "data"
   - to execute an event --> on("name of an event",cb);
   - default chunk size is 64kb, {higherWaterMark: 100}
   - RAM = 8gb, free = 3.5gb, maximum buffer size ==> formulae(OS).

2. Writable Streams.

   - It is used to write the data in continuous chunks.
   - Method name : **_createWriteStream()_**
   - If again run the same path then data will be overridden.

3. Duplex Stream
   - It is used to read and write together in continuous chunks.
   - **_pipe()_** => source.pipe(destination) - It connects source and destination.
4. Transform stream
   - It is similar to duplex but it can also modified the data too.
