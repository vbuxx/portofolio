/* eslint-disable default-case */
import React, { useState, useEffect, useRef } from "react";
import "./TerminalEngine.css";

const Terminal = ({ name, onInput, children }) => {
  const [currentLineInput, setCurrentLineInput] = useState("");
  const [command, setCommand] = useState("");
  const [commandList, setCommandList] = useState([]);
  const commandsEndRef = useRef(null);
  const inputCommand = useRef(null);

  const handleEnter = (event) => {
    if (onInput != null && event.key === "Enter") {
      onInput(currentLineInput);
      setCommand(currentLineInput);
      setCurrentLineInput("");
    }
  };

  const handleClick = () => {
    inputCommand.current && inputCommand.current.focus();
  };

  const commandSelector = (key) => {
    // eslint-disable-next-line default-case
    const response = {
      about:
        "ABOUT: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt iusto dolore nisi vero blanditiis neque, quas ducimus quo odit cumque libero recusandae ratione corporis excepturi aspernatur corrupti debitis dolorum ullam tenetur amet repellendus consequuntur commodi inventore! Vero quae excepturi vitae ducimus ut, exercitationem suscipit veniam hic velit provident reiciendis doloremque illo totam quos debitis ipsa nobis qui harum tenetur odit similique. Debitis sequi repellendus iste. Inventore, eligendi vitae. Temporibus consequatur commodi quaerat error laudantium id, ipsa eum inventore laborum molestiae velit suscipit qui possimus iure odit deserunt ex, facilis harum, dolorum hic alias iste recusandae esse explicabo! Tempore, placeat. 1",
      project:
        "PROJECTS: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt iusto dolore nisi vero blanditiis neque, quas ducimus quo odit cumque libero recusandae ratione corporis excepturi aspernatur corrupti debitis dolorum ullam tenetur amet repellendus consequuntur commodi inventore! Vero quae excepturi vitae ducimus ut, exercitationem suscipit veniam hic velit provident reiciendis doloremque illo totam quos debitis ipsa nobis qui harum tenetur odit similique. Debitis sequi repellendus iste. Inventore, eligendi vitae. Temporibus consequatur commodi quaerat error laudantium id, ipsa eum inventore laborum molestiae velit suscipit qui possimus iure odit deserunt ex, facilis harum, dolorum hic alias iste recusandae esse explicabo! Tempore, placeat.",
    };
    switch (key) {
      case "about":
        setCommandList(
          commandList.concat(
            <div className="react-terminal-input" Key={commandList.length}>
              {command}
              <div>{response.about}</div>
            </div>
          )
        );
        break;
      case "project":
        setCommandList(
          commandList.concat(
            <div className="react-terminal-input" Key={commandList.length}>
              {key}
              <div>{response.project}</div>
            </div>
          )
        );
        break;
    }
  };
  useEffect(() => {
    commandsEndRef.current?.scrollIntoView();
  }, [commandList]);

  useEffect(() => {
    commandSelector(command);
    console.log("Command List: ", commandList);

    return () => {
      setCommand("");
      setCurrentLineInput("");
    };
  }, [command]);

  useEffect(() => {
    inputCommand.current && inputCommand.current.focus();
  }, []);

  const classes = ["react-terminal-wrapper"];

  return (
    <div className={classes.join(" ")} data-terminal-name={name}>
      <div className="react-terminal" onClick={handleClick}>
        {children}
        {commandList}
        {onInput && (
          <>
            <div
              className="react-terminal-line react-terminal-input react-terminal-active-input"
              key="terminal-line-prompt"
            >
              {currentLineInput}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        )}
        <div ref={commandsEndRef}></div>
      </div>

      <input
        type="text"
        className="terminal-hidden-input"
        value={currentLineInput}
        ref={inputCommand}
        onChange={(event) => setCurrentLineInput(event.target.value)}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default Terminal;
