const fs = require('fs');

console.log('--- Script Start ---');

setTimeout(() => {
  console.log('1. setTimeout (Timers Phase)');
}, 0);

setImmediate(() => {
  console.log('2. setImmediate (Check Phase)');
});

fs.readFile(__filename, () => {
  console.log('--- Inside I/O Callback (Poll Phase) ---');

  setTimeout(() => {
    console.log('3. setTimeout inside I/O');
  }, 0);

  setImmediate(() => {
    console.log('4. setImmediate inside I/O');
  });

  process.nextTick(() => {
    console.log('5. nextTick inside I/O');
  });

  Promise.resolve().then(() => {
    console.log('6. Promise inside I/O');
  });
});

console.log('--- Script End ---');