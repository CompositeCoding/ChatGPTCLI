import { Configuration } from "openai";
import GPT from "../bin/gpt";

describe("GPT Class", () => {
  let gpt:any

  beforeEach(() => {
    const configuration = new Configuration({
      apiKey: "mock-api-key",
    });
    gpt = new GPT(configuration, "mock-model");
  });

  it("should be able to initialize", () => {
    expect(gpt).toBeDefined();
  });

  it("should initialize with correct values", () => {
    expect(gpt.conversation_store).toEqual([
      {
        role: "system",
        content: "You are answering questions in a CLI application. Your answers should be brief, direct and consise",
      },
    ]);
    expect(gpt.model).toEqual("mock-model");
    expect(gpt.chat_return).toEqual([]);
    expect(gpt.latest_question).toBeUndefined();
  });

  it("should append user's question to conversation store", async () => {
    gpt.createChatCompletion = jest.fn().mockResolvedValue({
      data: {
        choices: [
          {
            message: {
              content: "mock answer",
            },
          },
        ],
      },
    });

    await gpt.answer_question("mock question");
    expect(gpt.conversation_store[1]).toEqual({
      role: "user",
      content: "mock question",
    });
  });

});
