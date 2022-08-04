import React, { useState } from "react";
import TerminalEngine, {
  TerminalOutput,
} from "../components/terminal/TerminalEngine";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <div className="left-section">
          <span>¡Hola!</span>
          <p className="text-lg">I'm Andhika Pramana</p>
        </div>
        <section className="right-section">
          <div className="container">
            <TerminalEngine
              name="Terminil"
              onInput={(terminalInput) =>
                console.log(`New terminal input received: '${terminalInput}'`)
              }
            >
              <div className="react-terminal-line">
                Welcome to the React Terminal UI Demo!
              </div>
            </TerminalEngine>
          </div>
        </section>
      </div>
    </main>
  );
}
