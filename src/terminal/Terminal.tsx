import {ReactTerminal} from "react-terminal";
import {useEffect} from "react";
import {TerminalWelcome} from "./TerminalWelcomeMessage.tsx";

export default function Terminal() {
  const height = window.innerHeight / 1.2;


  useEffect(() => {
    getCommands()
  }, []);

  const commands = {
    whoami: "auronvila ---",
    github: () => <a href="https://github.com/auronvila" target="_blank"
                     rel="noopener noreferrer">https://github.com/auronvila</a>,
    contact: "contact@auronvila.com",
    linkedin: <a href="https://www.linkedin.com/in/auronvila" target="_blank"
                 rel="noopener noreferrer">auronvila</a>,
    about: () => (
      <pre style={{textWrap: 'wrap'}}>
{`As a Multidisciplinary Engineer, I specialize in building core systems and high-performance functionalities across hardware, software, and infrastructure layers.

=== TECH EXPERTISE ===
  - Core Development: C++, Go
  - Frontend: React, TypeScript
  - Backend: Nest.js, Node.js, .NET Core
  - Mobile Development: Native app development (React Native, Xcode, Android Studio)
  - Automation & Scripting: Python
  - UI Styling: Tailwind CSS
  - Infrastructure & Ops: Linux system administration, DevOps
  - Tools: Git, Postman, Database management

=== INNOVATION & VISION ===
I expanded into Blockchain and Solidity, developing decentralized applications that bridge traditional software with emerging technologies.

Currently integrating IoT and embedded systems with software engineering—building smarter, connected products using microcontrollers, sensors, and real-time data systems.

Driven by curiosity and deep problem-solving, I aim to unify hardware, software, and infrastructure into scalable, future-proof solutions.

Whether it's architecting scalable APIs, writing performance-critical systems in C++ and Go, or designing next-gen IoT products, I focus on engineering impactful, production-grade technologies.
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
