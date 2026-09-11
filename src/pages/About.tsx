import { BookOpen, CheckCircle, Code, Terminal } from 'lucide-react';

export default function About() {
  const stackItems = [
    { name: 'React 19', desc: 'Latest modern React with concurrent features' },
    { name: 'React Router v7', desc: 'Powerful declarative & data-oriented client-side routing' },
    { name: 'Vite 8', desc: 'Blazing-fast modern frontend build tool and dev server' },
    { name: 'TypeScript', desc: 'End-to-end static type safety and enhanced IDE autocompletion' },
    { name: 'Lucide React', desc: 'Consistent, clean, and lightweight modern SVG iconography' },
    { name: 'React Hot Toast', desc: 'Lightweight toast notifications out of the box' },
    { name: 'Vite PWA', desc: 'Progressive Web App support with automated service worker generation' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About Template Route</h1>
        <p className="page-subtitle">
          An open-source template crafted to eliminate boilerplate routing setup in modern React applications.
        </p>
      </div>

      <div className="about-grid">
        <div className="card">
          <div className="card-header">
            <BookOpen size={20} className="text-primary" />
            <h2 className="card-title">Project Purpose</h2>
          </div>
          <p className="card-text">
            When running <code>npm create vite@latest</code>, developers typically start with an empty canvas that lacks
            routing architecture, layout hierarchy, dark theme support, or authorization guards.
          </p>
          <p className="card-text">
            <strong>Template Route</strong> bridges this gap by offering a clean, maintainable architecture ready to be
            cloned and extended for production applications.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <Code size={20} className="text-primary" />
            <h2 className="card-title">Technology Stack</h2>
          </div>
          <ul className="stack-list">
            {stackItems.map((item, idx) => (
              <li key={idx} className="stack-item">
                <CheckCircle size={16} className="text-accent" />
                <div>
                  <strong>{item.name}</strong> — <span>{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="quick-start-box">
        <div className="card-header">
          <Terminal size={20} className="text-primary" />
          <h2 className="card-title">Getting Started in 10 Seconds</h2>
        </div>
        <pre className="code-block">
          <code>
{`git clone https://github.com/umarfauzan11/Template-Route.git my-app
cd my-app
npm install
npm run dev`}
          </code>
        </pre>
      </div>
    </div>
  );
}
