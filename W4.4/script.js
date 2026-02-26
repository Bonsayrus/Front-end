const name = prompt("What is your name?");
const greeting = "Hello, John! How are you?";
const personalizedGreeting = greeting.replace("John", name);
alert(`${greeting}
${personalizedGreeting}`);