'use client';

import { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const commands: Record<string, string> = {
    help: `
      <div class="mb-2">
          <p class="font-bold text-yellow-400">Available commands:</p>
          <div class="ml-2 mt-1 space-y-1">
              <div class="flex"><span class="text-green-400 w-24 shrink-0">about</span><span>- Who I am</span></div>
              <div class="flex"><span class="text-green-400 w-24 shrink-0">projects</span><span>- View my work</span></div>
              <div class="flex"><span class="text-green-400 w-24 shrink-0">skills</span><span>- My technical skills</span></div>
              <div class="flex"><span class="text-green-400 w-24 shrink-0">contact</span><span>- How to reach me</span></div>
              <div class="flex"><span class="text-green-400 w-24 shrink-0">resume</span><span>- Download my CV (PDF)</span></div>
              <div class="flex"><span class="text-green-400 w-24 shrink-0">clear</span><span>- Clear the terminal screen</span></div>
          </div>
      </div>
    `,
    about: `
      <div class="mb-2">
          <p>Hello! I'm Pasit, a 3rd-year Computer Science student passionate about building web & mobile apps.</p>
      </div>
    `,
    skills: `
  <div class="mb-2 space-y-2">
    <p class="font-bold text-yellow-400">🧠 Languages:</p>
    <ul class="ml-4 list-disc list-inside">
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Go</li>
      <li>Rust</li>
      <li>Java</li>
      <li>Python</li>
      <li>Dart</li>
      <li>Kotlin</li>
      <li>C++</li>
    </ul>

    <p class="font-bold text-yellow-400">🎨 Frontend:</p>
    <ul class="ml-4 list-disc list-inside">
      <li>React</li>
      <li>Next.js</li>
      <li>Vue.js</li>
      <li>Tailwind CSS</li>
      <li>Flutter</li>
      <li>Jetpack Compose</li>
    </ul>

    <p class="font-bold text-yellow-400">🛠️ Backend:</p>
    <ul class="ml-4 list-disc list-inside">
      <li>Express.js</li>
      <li>Node.js</li>
      <li>Bun.js</li>
      <li>Elysia.js</li>
      <li>Hono.js</li>
      <li>Fiber</li>
      <li>Gin</li>
    </ul>

    <p class="font-bold text-yellow-400">🗄️ Databases:</p>
    <ul class="ml-4 list-disc list-inside">
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>Firebase</li>
    </ul>

    <p class="font-bold text-yellow-400">⚙️ Tools & Platforms:</p>
    <ul class="ml-4 list-disc list-inside">
      <li>Docker</li>
      <li>Postman</li>
      <li>Git & GitHub</li>
    </ul>
  </div>
`,

    projects: `
      <div class="mb-2">
          <p class="font-bold text-yellow-400">Projects:</p>
          <p class="ml-2">- Smart Trash Sorter</p>
          ...
      </div>
    `,
    contact: `
      <div class="mb-2">
          <p>Contact me!:</p>
          <div class="ml-2">
              <p><span class="text-green-400">Email:</span> <a class="terminal-link" href="mailto:your.email@example.com">your.email@example.com</a></p>
              <p><span class="text-green-400">Github:</span> <a class="terminal-link" href="github.com/pasitgut">github.com/pasitgut</a></p>
          </div>
      </div>
    `,
    resume: `
      <div class="mb-2">
          <p>ดาวน์โหลดเรซูเม่ได้ที่นี่: <a class="terminal-link" href="/resume.pdf" target="_blank">resume.pdf</a></p>
      </div>
    `,
  };

  const typeOutput = (html: string) => {
    setHistory((prev) => [...prev, html]);
  };

  const handleCommand = (cmd: string) => {
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    const output = commands[cmd] || `<p>Command not found: ${cmd}</p>`;
    const fullCommand = `<div class="flex"><span class="text-green-400">guest@portfolio:~$</span><span class="ml-2 break-all">${cmd}</span></div>`;
    typeOutput(fullCommand + output);

    if (cmd === 'resume') {
      setTimeout(() => window.open('/resume.pdf', '_blank'), 500);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
    // Initial welcome message
    typeOutput(`
      <div class="mb-2">
        <p>Welcome to my Interactive Portfolio!</p>
        <p>Type <span class="text-yellow-400">'help'</span> to see commands.</p>
      </div>
    `);
  }, []);

  return (
    <div
      ref={terminalRef}
      className="w-full h-full text-sm md:text-base"
      onClick={() => inputRef.current?.focus()}
    >
      <div id="output-container">
        {history.map((item, idx) => (
          <div key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </div>

      <div className="flex items-center">
        <span className="text-green-400">guest@portfolio:~$</span>
        <div className="relative flex-grow ml-2 flex items-center">
          <span className="break-all">{input}</span><span className="cursor"></span>
          <input
            ref={inputRef}
            type="text"
            id="command-input"
            className="absolute top-0 left-0 w-full h-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const trimmed = input.trim().toLowerCase();
                if (trimmed) handleCommand(trimmed);
                setInput('');
              }
            }}
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
