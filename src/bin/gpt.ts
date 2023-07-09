import { Configuration, OpenAIApi } from "openai"
import chalk from "chalk"

type Role = "system" | "user"
type Conversation = {
  role: Role
  content: string
}

type QA = {
  question: string
  answer: string
}

// The GPT class interacts with the prompt input layer
export default class GPT extends OpenAIApi {
  public conversation_store: Conversation[]
  public model: string
  public chat_return: QA[]
  public latest_question: QA | undefined

  constructor(configuration: Configuration, model: string) {
    super(configuration)
    this.conversation_store = [
      {
        role: "system",
        content:
          "You are answering questions in a CLI application. Your answers should be brief, direct and consise",
      },
    ]
    this.model = model
    this.chat_return = []
    this.latest_question
  }

  // main question function, loads the whole conversion
  // and makes the call to the OpenAI API
  async answer_question(question: string) {
    try {
      this.conversation_store.push({ role: "user", content: question })

      const response = await this.createChatCompletion({
        model: this.model,
        messages: this.conversation_store,
        temperature: 0.2,
      })

      const qa: QA = {
        question,
        answer: response?.data?.choices[0]?.message?.content || "no answer given",
      }

      this.chat_return.push(qa)
      this.latest_question = qa
    } catch (err) {
      console.log(chalk.red("OPENAI CONNECTION ERROR"))
    }
  }

  // prints to the console
  logger(qa: QA) {
    console.log("----------------------------------------------", "\n")
    console.log(qa.answer)
    console.log("\n")
    console.log("----------------------------------------------", "\n")
  }

  // Logger logic, uses either the last question or
  // custom provided input
  chat_logger(use_latest: boolean = false, qa: QA | undefined) {
    if (use_latest && this.latest_question) {
      this.logger(this.latest_question)
      return
    }

    if (qa) {
      this.logger(qa)
    }
  }

  // maybe later
  chat_save() {}
}
