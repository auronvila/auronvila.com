import {ReactTerminal} from "react-terminal";
import {useEffect} from "react";
import {TerminalWelcome} from "./TerminalWelcomeMessage.tsx";

export default function Terminal() {
  const height = window.innerHeight / 1.2;


  useEffect(() => {
    getCommands()
  }, []);

  const commands = {
    whoami: "auronvila",
    github: () => <a href="https://github.com/auronvila" target="_blank"
                     rel="noopener noreferrer">https://github.com/auronvila</a>,
    contact: "auronvila.dev@gmail.com",
    about: () => (
      <pre style={{textWrap: 'wrap'}}>
      {`As a Multidisciplinary Engineer, I specialize in building core functionalities and designing scalable, efficient systems that deliver impactful solutions across various domains.

=== TECH EXPERTISE ===
  - Frontend: React, TypeScript
  - Backend: Nest.js, Node.js, .NET Core
  - Performance-Critical Systems: Go
  - Mobile Development: Native app development
  - Automation & Scripting: Python
  - UI Styling: Tailwind CSS
  - Infrastructure & Ops: Linux system administration
  - Tools: Git, Postman, Database management

=== INNOVATION & VISION ===
I expanded into Blockchain and Solidity, building decentralized applications that bridge the gap between traditional software systems and emerging technologies.

My goal is to merge IoT and electronics development with software expertise, enabling smarter, connected solutions.

Driven by continuous learning and a deep passion for solving complex problems, I aim to bridge hardware, software, and infrastructure.

Whether it’s delivering production-ready systems, architecting scalable APIs, or creating future-proof IoT solutions, I thrive on building technology that makes an impact.
==============================`}
    </pre>
    ),
    help: () => `Available commands are: ${getCommands()}`,
  };


  function getCommands() {
    const cmds = Object.keys(commands)
    console.log(cmds.join(', '));

    return cmds.join(', ')
  }


  return (
    <div style={{height: height}}>
      <ReactTerminal
        errorMessage={"Command not found please type \"help\" to get the list of available commands."}
        welcomeMessage={<TerminalWelcome/>}
        theme={"matrix"}
        commands={commands}
      />
    </div>
  );
}
