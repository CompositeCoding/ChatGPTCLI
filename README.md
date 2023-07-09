
# ChatGPT CLI Tool

This is a TypeScript CLI tool for interacting with ChatGPT using the OpenAI API. It allows you to have interactive conversations with any model inside your shell.

## Prerequisites

Before using this tool, make sure you have the following:

- Node.js installed on your machine
- An OpenAI API key

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/CompositeCoding/ChatGPTCLI.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To use this CLI tool, follow these steps:

1. Set your OpenAI API key as an environment variable named `OPENAI_API_KEY`. You can obtain an API key from the OpenAI website. You can specify the model by setting `GPT_MODEL`, this will default to gpt-3.5-turbo.

2. Run the CLI tool:

   ```bash
   npm run start
   ```

3. The tool will prompt you to enter a message. To send your promt, type `send` on a new lineand hit enter.

4. The ChatGPT model will generate a response based on your input.

5. You can continue the conversation by entering additional messages.

6. To exit the tool, type `q` or press Ctrl+C.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This tool is not officially developed or maintained by OpenAI. Use it at your own risk.

## Acknowledgements

This tool is built using the OpenAI API. Special thanks to them!