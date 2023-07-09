import promt from './bin/promt'

// main application entrypoint
console.log("Ask a Question to ChatGPT, type 'send' to submit your prompt or type 'q' to exit!", "\n")
promt()

process.on("exit", () => {
  console.log("Exiting")
})