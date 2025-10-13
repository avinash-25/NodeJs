# Node.js File System (fs) Module - Complete Notes

## Table of Contents
1. [Introduction](#introduction)
2. [Importing the Module](#importing-the-module)
3. [File System Operations (CRUD)](#file-system-operations-crud)
4. [Folder Operations](#folder-operations)
5. [Path Conventions](#path-conventions)
6. [Error Handling](#error-handling)
7. [Important Notes](#important-notes)
8. [Practice Examples](#practice-examples)

---

## Introduction

The **fs (File System)** module in Node.js provides utilities to interact with files and folders on your system. It allows you to perform **CRUD operations** (Create, Read, Update, Delete) on files and directories.

## Theoretical Foundation

### What is a File System?
A **file system** is the method and data structure that an operating system uses to control how data is stored and retrieved on storage devices (hard drives, SSDs, etc.). It's like a filing cabinet system for your computer.

**Key Concepts:**
- **Files**: Containers that store data (text, images, videos, etc.)
- **Directories/Folders**: Containers that organize files and other directories
- **Path**: The location/address of a file or directory in the system
- **Metadata**: Information about files (size, creation date, permissions, etc.)

### Why Do We Need File System Operations?
1. **Data Persistence**: Store data permanently beyond program execution
2. **Configuration Management**: Read/write application settings
3. **Log Files**: Record application events and errors
4. **Data Processing**: Handle large datasets from files
5. **Backup & Recovery**: Create copies of important data
6. **Inter-Process Communication**: Share data between different programs

<br>

### Node.js and File Systems
Node.js provides the **fs module** as a bridge between JavaScript and the operating system's file system. This allows JavaScript (traditionally a browser language) to perform server-side file operations.

## Execution Types Theory

### Synchronous vs Asynchronous Operations

#### **Synchronous (Blocking)**
```
Program Flow: Task 1 → [WAIT] File Operation → Task 2 → Task 3
```
- **Blocks** the entire program until operation completes
- **Sequential** execution - one task at a time
- **Simple** to understand and debug
- **Performance Impact**: Can freeze the application

#### **Asynchronous (Non-Blocking)**
```
Program Flow: Task 1 → File Operation (background) → Task 2 → Task 3
                     ↓
                  Callback when complete
```
- **Non-blocking** - program continues while operation runs
- **Concurrent** execution - multiple tasks can run
- **Better Performance** for I/O operations
- **Complex** callback handling

### When to Use Each?
- **Synchronous**: Configuration loading, build scripts, CLI tools
- **Asynchronous**: Web servers, real-time applications, production systems

---

<br><br><br><br><br><br><br><br>

## Importing the Module

```javascript
// CommonJS (Traditional)
const fs = require("fs");

// ES6 Modules (Modern)
import fs from "fs";

// Named imports (for specific methods)
import { readFileSync, writeFileSync } from "fs";
```

---

## Path Conventions

| Symbol | Meaning |
|--------|---------|
| `.` | Current folder |
| `..` | One folder back (parent directory) |
| `/` | Go inside current folder (path separator) |

**Examples:**
- `./file.txt` - File in current directory
- `../file.txt` - File in parent directory
- `./folder/file.txt` - File inside a subfolder

---

## Buffer Theory

### What is a Buffer?
A **Buffer** in Node.js is a temporary storage area that holds raw binary data. Think of it as a container for bytes.

#### **Why Buffers Exist:**
1. **Binary Data Handling**: JavaScript was originally designed for text, not binary data
2. **Memory Efficiency**: Direct memory allocation for faster operations
3. **Cross-Platform**: Consistent binary data handling across different systems
4. **Stream Processing**: Handle large files without loading everything into memory

<br><br><br><br><br><br><br>

#### **Buffer vs String:**
```javascript
// Without encoding - returns Buffer
let buffer = fs.readFileSync("file.txt");
console.log(buffer); // <Buffer 48 65 6c 6c 6f>

// With encoding - returns String
let string = fs.readFileSync("file.txt", "utf-8");
console.log(string); // "Hello"
```

#### **Common Encodings:**
- **UTF-8**: Default, supports all characters (recommended)
- **ASCII**: Basic English characters only
- **Base64**: Used for data transmission
- **Hex**: Hexadecimal representation
- **Binary**: Raw binary data

### Memory Management Theory
When reading large files:
- **Without encoding**: Creates Buffer in memory
- **With encoding**: Creates Buffer + converts to String (more memory)
- **Best Practice**: Use streams for large files

## File Path Theory

### Absolute vs Relative Paths

#### **Absolute Path:**
- Complete path from root directory
- **Windows**: `C:\Users\John\Documents\file.txt`
- **Linux/Mac**: `/home/john/documents/file.txt`
- **Always works** regardless of current directory

#### **Relative Path:**
- Path relative to current working directory
- **Examples**: `./file.txt`, `../folder/file.txt`
- **Depends** on where the program is running from

<br><br><br><br>

### Path Resolution
```javascript
// Current directory: /home/user/project
"./file.txt"     → /home/user/project/file.txt
"../file.txt"    → /home/user/file.txt
"folder/file.txt" → /home/user/project/folder/file.txt
```

## CRUD Theory in File Systems

### Create Operations
**Purpose**: Bring new files/folders into existence
- **File Creation**: Allocates disk space, creates file entry
- **Data Writing**: Converts data to bytes, stores on disk
- **Metadata Creation**: Sets timestamps, permissions, size info

### Read Operations
**Purpose**: Retrieve data from storage into memory
- **File Location**: OS finds file using path
- **Data Loading**: Reads bytes from disk into RAM
- **Conversion**: Transforms bytes to usable format (if needed)

### Update Operations
**Purpose**: Modify existing data without replacing entirely
- **Append**: Adds data to end of file
- **In-place Editing**: Modifies specific parts (advanced)
- **Atomic Operations**: Ensures data consistency

### Delete Operations
**Purpose**: Remove files/folders from file system
- **Unlink**: Removes file system entry
- **Space Recovery**: Marks disk space as available
- **Metadata Cleanup**: Removes file information

<br><br><br><br><br>

### 1. CREATE - Writing Files

**Method:** `fs.writeFileSync(path, data)`

```javascript
// Create a new file
fs.writeFileSync("./data.json", `{"key": "value"}`);
fs.writeFileSync("../demo.txt", "Hello World!");

console.log("File created successfully!");
```

**Important Notes:**
- Both arguments are mandatory
- If file exists: **overwrites** the existing content
- If file doesn't exist: **creates** a new file
- Operation is **synchronous** (blocking)

### 2. UPDATE - Appending to Files

**Method:** `fs.appendFileSync(path, newData)`

```javascript
// Add content to the end of existing file
fs.appendFileSync("./emp.java", `
[
    {"key2": "value2"},
    {"key1": "value1"}
]`);

console.log("Data appended successfully!");
```

**Important Notes:**
- Adds data at the **end** of the file
- If file doesn't exist: creates a new file
- Does **not** overwrite existing content

### 3. READ - Reading Files

**Method:** `fs.readFileSync(path, encoding)`

#### Option 1: Using toString() method
```javascript
let data = fs.readFileSync("./data.json");
console.log(data); // Returns Buffer object
console.log(data.toString()); // Converts to string (UTF-8 by default)
console.log(data.toString("hex")); // Converts to hexadecimal
```

<br><br>

#### Option 2: Using encoding parameter
```javascript
let data = fs.readFileSync("./data.json", "utf-8");
console.log(data); // Directly returns string
```

**Buffer vs String:**
- Without encoding: Returns **Buffer** (array of binary numbers)
- With encoding or toString(): Returns readable **string**
- Default encoding is **UTF-8**

### 4. DELETE - Removing Files

**Method:** `fs.unlinkSync(path)`

```javascript
try {
    fs.unlinkSync("./about.txt");
    console.log("File deleted successfully!");
} catch (error) {
    console.log("Error deleting file:", error.message);
}
```

**Important Notes:**
- Use **try-catch** for error handling
- Cannot delete non-existent files (throws error)

### 5. RENAME - Renaming Files/Folders

**Method:** `fs.renameSync(oldPath, newPath)`

```javascript
// Rename file
fs.renameSync("./about.html", "./about.md");

// Rename folder
fs.renameSync("../about", "./moreAbout");

console.log("Renamed successfully!");
```

---

<br><br><br><br><br><br><br>

## Folder Operations

### 1. CREATE - Making Directories

**Method:** `fs.mkdirSync(path)`

```javascript
// Create single folder
fs.mkdirSync("./Folder1");

// Create nested structure (step by step)
fs.mkdirSync("./Folder1");
fs.mkdirSync("./Folder1/subfolder");

console.log("Folders created!");
```

**Creating Nested Structure Example:**
```javascript
// Create: backend/controller/app.js
fs.mkdirSync("./backend");
fs.mkdirSync("./backend/controller");
fs.writeFileSync("./backend/controller/app.js", "// App file content");
```

### 2. DELETE - Removing Directories

**Method:** `fs.rmdirSync(path, options)`

```javascript
// Delete empty folder
fs.rmdirSync("./emptyFolder");

// Delete folder with all contents (recursive)
fs.rmdirSync("./backend", { recursive: true });

console.log("Folder deleted!");
```

**Manual Deletion (Step by Step):**
```javascript
// Delete files first, then folders
fs.unlinkSync("./backend/controller/app.js");
fs.rmdirSync("./backend/controller");
fs.rmdirSync("./backend");
```

---

<br><br><br><br><br>

## Error Handling Theory

### Why Errors Occur in File Operations
1. **File Not Found**: Path doesn't exist
2. **Permission Denied**: Insufficient access rights
3. **Disk Full**: No space available for writing
4. **File Locked**: Another process is using the file
5. **Invalid Path**: Malformed or illegal path characters
6. **Hardware Issues**: Disk read/write failures

### Error Types in Node.js
```javascript
try {
    fs.readFileSync("nonexistent.txt");
} catch (error) {
    console.log(error.code);    // 'ENOENT'
    console.log(error.message); // 'no such file or directory'
    console.log(error.path);    // 'nonexistent.txt'
}
```

### Common Error Codes
- **ENOENT**: No such file or directory
- **EACCES**: Permission denied
- **ENOSPC**: No space left on device
- **EMFILE**: Too many open files
- **EISDIR**: Is a directory (when file expected)
- **ENOTDIR**: Not a directory (when directory expected)

### Error Handling Strategies
1. **Try-Catch**: For synchronous operations
2. **Graceful Degradation**: Provide fallback options
3. **User Feedback**: Inform users about issues
4. **Logging**: Record errors for debugging
5. **Recovery**: Attempt to fix issues automatically

## Performance Theory

### I/O Operations and the Event Loop
File operations are **I/O bound** - they depend on disk speed, not CPU speed.

<br>

#### **Synchronous Impact:**
```
Event Loop: [BLOCKED] → File Operation → Continue
Result: Application becomes unresponsive
```

#### **Asynchronous Benefit:**
```
Event Loop: Continue → Continue → Continue
            ↓
         File Operation (Background Thread)
            ↓
         Callback Added to Event Queue
```

### Performance Considerations
1. **Disk Speed**: SSDs are faster than HDDs
2. **File Size**: Larger files take more time
3. **System Load**: Other processes affect performance
4. **Network Files**: Remote files are much slower
5. **Concurrent Operations**: Multiple operations can conflict

### Optimization Strategies
- Use **streams** for large files
- **Cache** frequently accessed data
- **Batch operations** when possible
- **Async** operations for better responsiveness
- **Compression** for storage efficiency

```javascript
try {
    console.time("file-operation");

    fs.writeFileSync("./test.txt", "Hello World!");
    let data = fs.readFileSync("./test.txt", "utf-8");
    console.log(data);

    console.timeEnd("file-operation");
} catch (error) {
    console.log("Something went wrong:", error.message);
}
```

<br><br><br><br><br>

### Common Error Scenarios
- File/folder doesn't exist
- Permission denied
- Invalid path
- Disk space full
- File is in use by another process

---

## Important Notes

### toString() Method Details
- **Default**: UTF-8 encoding
- **Options**: "hex", "base64", "ascii", etc.
- **Usage**: `buffer.toString("encoding")`

### Performance Considerations
- Synchronous operations **block** the event loop
- Use **asynchronous** versions for better performance in production
- Consider using `console.time()` and `console.timeEnd()` for performance measurement

### Best Practices
1. Always use **try-catch** for error handling
2. Use **absolute paths** when possible
3. Validate file existence before operations
4. Use **asynchronous** methods for better performance
5. Handle **encoding** properly for text files

---

## Practice Examples

### Example 1: Copy File Contents
```javascript
// Copy contents from one file to another
try {
    let content = fs.readFileSync("./source.html", "utf-8");
    fs.writeFileSync("./destination.txt", content);
    console.log("File copied successfully!");
} catch (error) {
    console.log("Copy failed:", error.message);
}
```

### Example 2: Create Project Structure
```javascript
// Create a complete project structure
try {
    fs.mkdirSync("./myProject");
    fs.mkdirSync("./myProject/src");
    fs.mkdirSync("./myProject/public");

    fs.writeFileSync("./myProject/package.json", '{"name": "my-project"}');
    fs.writeFileSync("./myProject/src/index.js", "console.log('Hello World!');");

    console.log("Project structure created!");
} catch (error) {
    console.log("Error creating project:", error.message);
}
```

### Example 3: File Information and Management
```javascript
// Read, modify, and save file
try {
    // Read existing data
    let data = fs.readFileSync("./data.json", "utf-8");
    let jsonData = JSON.parse(data);

    // Modify data
    jsonData.timestamp = new Date().toISOString();

    // Save back to file
    fs.writeFileSync("./data.json", JSON.stringify(jsonData, null, 2));

    console.log("File updated with timestamp!");
} catch (error) {
    console.log("Error processing file:", error.message);
}
```

---

## Advanced Concepts

### File Descriptors
A **file descriptor** is a unique identifier that the operating system assigns to each open file.

```javascript
// Opening a file returns a file descriptor
let fd = fs.openSync('./file.txt', 'r');
console.log(fd); // Number like 3, 4, 5...

// Use the descriptor for operations
let buffer = Buffer.alloc(1024);
fs.readSync(fd, buffer, 0, 1024, 0);

// Always close when done
fs.closeSync(fd);
```

**Why File Descriptors Matter:**
- **Resource Management**: OS has limited file handles
- **Performance**: Direct file access without path resolution
- **Advanced Operations**: Fine-grained control over file operations

### Streams vs Direct File Operations

#### **Direct Operations (What we've learned)**
```javascript
// Loads entire file into memory
let data = fs.readFileSync('large-file.txt', 'utf-8');
// Memory usage = File size
```

#### **Streams (Advanced - for large files)**
```javascript
// Processes file in chunks
let stream = fs.createReadStream('large-file.txt');
stream.on('data', chunk => {
    // Process each chunk
});
// Memory usage = Chunk size (usually 64KB)
```

### File System Monitoring
```javascript
// Watch for file changes (not in your current notes, but useful)
fs.watchFile('./config.json', (curr, prev) => {
    console.log('Config file changed!');
});
```

## Real-World Applications

### 1. Web Development
- **Static File Serving**: Serve HTML, CSS, JS files
- **File Uploads**: Handle user uploaded files
- **Template Processing**: Read and process template files
- **Configuration**: Load app settings from JSON/YAML files

### 2. Build Tools
- **Asset Bundling**: Combine multiple files into one
- **Code Transformation**: Process source files (TypeScript → JavaScript)
- **File Generation**: Create output files automatically

### 3. Data Processing
- **Log Analysis**: Read and process server logs
- **Data Migration**: Transform data between formats
- **Backup Systems**: Copy files for data safety

### 4. System Administration
- **File Cleanup**: Remove old temporary files
- **Configuration Management**: Update system config files
- **Monitoring**: Check file sizes and permissions