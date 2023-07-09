import { Configuration } from "openai"
import "dotenv/config"
import readline from "readline"
import GPT from "./gpt"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const gpt = new GPT(configuration, process.env.GPT_MODEL || "gpt-3.5-turbo" )

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
})

// Main promt logic that handles reading and writing to
// the stdout as well as calling the GPT class
export default function promt() {

  let answer: string = ""

  rl.setPrompt("")
  rl.prompt()

  rl.on("line", async (line: string) => {

    if (line.trim() === "q"){
        process.exit()
    } 
    
    // waiting for send allows multiple lines
    // to be read and creates a clear border
    if (line.trim() === "send") {

      await gpt.answer_question(answer)
      gpt.chat_logger(true, undefined)
      
      answer = ""
      
      console.log("Ask Question:")
    } else {
      answer += line + "\n"
      rl.prompt()
    }
  })
}