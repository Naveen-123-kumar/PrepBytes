// 1)What is JavaScript?
// Ans->JavaScript is a scripting language that is used to create and control dynamic web contains.It is a single threated,synchronous and blocking.

// 2)what is the javascript run time environment?
// Ans->The JavaScript runtime environment provides access to built-in libraries and objects that are available to a program
// so that it can interact with the outside world and make the code work.
// In the context of a browser comprised of
// The JavaScript engine (which in turn is made up of the heap and the call stack)
// Web APIs
// The callback queue
// The event loop

// 3)what is execution context?
// Ans->The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.
// There are two kinds of Execution Context in JavaScript:
//  Global Execution Context
//  Function Execution Context

// 4)what is javascript Engine?
// Ans->The JavaScript Engine is a program whose responsibility is to execute JavaScript code.
// All modern browsers come with their own version of the JavaScript Engine but the most popular one is Google’s V8 Engine.
// V8 ->Open-source JavaScript Engine developed by Google for Chrome

// 5)flow of data in engine?
// Ans->The environment needs to have an engine, which takes the JS code that's written in human-readable syntax and turns it into machine code.
// The engine uses a parser to go through the code line by line and check if the syntax is correct. If there are any errors, code will stop executing and an error will be thrown.