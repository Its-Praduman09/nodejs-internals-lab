# Node.js Core Internals Lab

Deep dive into the low-level architecture and internal mechanics of Node.js, exploring Libuv, V8, memory allocation, and OS-level I/O.

---

## 📌 Roadmap & Modules

1. **01-event-loop**: Libuv Event Loop phases (Timers, Poll, Check), Microtask Queue (`process.nextTick` vs `Promise`), and event loop starvation.
2. **02-event-emitter**: Custom EventEmitter implementation from scratch, synchronous event dispatching, and memory leak detection.
3. **03-thread-pool**: Libuv worker thread pool, thread saturation benchmarks, and OS-level non-blocking I/O vs thread pool operations.
4. **04-buffers-memory**: V8 Heap vs Off-Heap memory, `Buffer.poolSize` slab allocation, and zero-fill security.
5. **05-streams-backpressure**: Low-level stream implementations (`Readable`, `Writable`), stream piping, and backpressure handling.
6. **06-native-addon**: Node-API (N-API) C++ addon interfacing directly with V8 and Libuv.

---

## 🛠️ Prerequisites

- Node.js (LTS version recommended)
- Git

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone [https://github.com/Its-Praduman09/nodejs-internals-lab.git](https://github.com/Its-Praduman09/nodejs-internals-lab.git)
cd nodejs-internals-lab