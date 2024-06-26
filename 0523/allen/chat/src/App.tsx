import React, { useState } from "react";
import "./App.css";

// Define a type for the messages in the chat
interface Message {
  role: "user" | "assistant";
  content: string;
}

function App() {
  // Use the Message interface for initializing the state
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [api, setApi] = useState(
    "http://100.89.152.5:11434/v1/chat/completions"
  );
  const [token, setToken] = useState("whateveryoulike");
  const [model, setModel] = useState("gemma:7b");

  const handleSendMessage = async () => {
    //这行代码检查用户输入（userInput）是否为空（或只包含空格）。使用 .trim() 方法去除前后的空白字符，如果结果为空字符串，则 if 条件为真，函数将执行 return 语句，即直接返回而不继续执行后面的代码。这是为了防止发送空消息。
    if (!userInput.trim()) return;
    const newMessage: Message = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setUserInput("");

    const response = await fetchAIResponse(userInput);
    const botMessage: Message = { role: "assistant", content: response };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  
  const fetchAIResponse = async (input: string) => {
    const requestBody = JSON.stringify({
      model: model,
      prompt: input,
      messages: [
        {
          role: "user", // 为假设的历史消息添加角色
          content: input
        }
      ] // 假设的历史消息，包括角色和内容
    });
  
    console.log("Complete Request Body:", requestBody); // 打印完整的请求体内容
  
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: requestBody,
      });
  
      console.log("Response Status:", response.status); // 打印响应状态码
  
      if (!response.ok) {
        const errorResponse = await response.text(); // 尝试获取错误响应体
        console.error("Error Response Body:", errorResponse); // 打印错误响应体
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error during fetch:", (error as Error).message);
      return `Error fetching response: ${(error as Error).message}`;
    }
  };
   
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="container-fluid text-center">
      <div className="row sticky-top">
        <div className="col m-2" id="header">
          <h1>Chat Box</h1>
        </div>
      </div>

      <div className="row content-row">
        <div className="chat-box chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <div className="text">{msg.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="row sticky-bottom">
        <div className="col m-2">
          <div className="input-group">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder=""
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <label htmlFor="floatingInput">Type your message here...</label>
            </div>

            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="API"
                  value={api}
                  onChange={(e) => setApi(e.target.value)}
                />
                <label htmlFor="floatingInput">API</label>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center">
              <span className="input-group-text">Token:</span>
              <input
                type="text"
                className="form-control flex-grow-1"
                placeholder="Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <span className="input-group-text">Model:</span>
              <input
                type="text"
                className="form-control flex-grow-1"
                placeholder="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
