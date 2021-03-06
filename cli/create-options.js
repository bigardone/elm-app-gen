module.exports = {
  arg: {
    name: "name",
    description: "The name of the application",
    prompt: "What is the name of your application?",
    ifNotSet: "I need a name to create your application."
  },
  options: [
    {
      name: "type",
      type: "list",
      choices: ["sandbox", "element", "document", "application"],
      description: "The type of the application",
      prompt: `What type of application would you like to create?
   If you don't know what this means, see 
   https://package.elm-lang.org/packages/elm/browser/latest/ 
   for an explanation`,
      default: "document"
    },
    {
      name: "description",
      description: "A description of the application",
      prompt: "Please provide a brief description of your application:"
    },
    {
      name: "author",
      description: "The author of the application",
      prompt: "Who is the author of this project?"
    },
    {
      name: "license",
      description: "The SPDX license identifier for the project",
      prompt: "What license (SPDX identifier) would you like to use?"
    },
    {
      name: "installer",
      description: "The tool to use for dependency installation",
      prompt: "What would you like to use to install dependencies?",
      choices: ["npm", "yarn"],
      ifNotSet:
        "I need to know what install tool you want to use for build dependencies."
    },
    {
      name: "start",
      description: "If set, immediately start the application in dev mode",
      prompt: "Should I start the development server?",
      confirm: true,
      default: false
    }
  ],
  helpMessage: `
The create command is used to create a new Elm project. Any options
not specified on the command line will be requested via interactive prompts,
unless --no-prompt is used. When called with --no-prompt, --name and --installer
are required.
`
};
