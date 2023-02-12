// Create a toggle button element for the chatbot
const toggleButton = document.createElement("button");
toggleButton.innerText = "Assistant";
toggleButton.classList.add("toggle-button");
document.body.appendChild(toggleButton);

// Create a container element for the chatbot
const chatContainer = document.createElement("div");
chatContainer.classList.add("chat-container");
chatContainer.style.display = "none";

// Create a message container element
const messagesContainer = document.createElement("div");
messagesContainer.classList.add("messages-container");
chatContainer.appendChild(messagesContainer);

// Create an input element for the user to type messages
const inputElement = document.createElement("input");
inputElement.classList.add("chat-input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("placeholder", "Type your message...");
chatContainer.appendChild(inputElement);

// Create a button element to send messages
const buttonElement = document.createElement("button");
buttonElement.innerText = "Send";
buttonElement.classList.add("send-button");
chatContainer.appendChild(buttonElement);

// Add the chatbot to the page
document.body.appendChild(chatContainer);

// Function to toggle the visibility of the chatbot
function toggleChatbot() {
  if (chatContainer.style.display === "none") {
    chatContainer.style.display = "flex";
  } else {
    chatContainer.style.display = "none";
  }
}

// Function to send a message to the chatbot
async function sendMessage(message) {
  // Add the user message to the chat interface
  const userMessageElement = document.createElement("div");
  userMessageElement.classList.add("chat-message");
  userMessageElement.classList.add("user-message");
  userMessageElement.innerText = message;
  messagesContainer.appendChild(userMessageElement);

  // Implementation of the getChatbotResponse function should be overwritten
  const response = await getChatbotResponse(message);

  // Add the chatbot's response to the chat interface
  const botMessageElement = document.createElement("div");
  botMessageElement.classList.add("chat-message");
  botMessageElement.classList.add("bot-message");
  botMessageElement.innerText = response;
  messagesContainer.appendChild(botMessageElement);
}

// Send a message when the user clicks the "Send" button
buttonElement.addEventListener("click", () => {
  const message = inputElement.value;
  inputElement.value = "";
  sendMessage(message);
});

// Send a message when the user presses the "Enter" key
inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const message = inputElement.value;
    inputElement.value = "";
    sendMessage(message);
  }
});

// Toggle the chatbot when the user clicks the toggle button
toggleButton.addEventListener("click", toggleChatbot);

// Example implementation of the getChatbotResponse function
// This function should be replaced with your actual implementation
// that calls the Dialogflow API to get the response from the chatbot
async function getChatbotResponse(message) {
  const responses = [
    "Hello! How can I help you today?",
    "Hi! How can I assist you?",
    "Hello! How can I be of service?",
    "Hi! How can I help you today?",
    "Hello! How can I assist you?",
    "Hi! How can I be of service?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
