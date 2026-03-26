'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language: string
}

const languageMap: Record<string, string> = {
  Java: 'java',
  Python: 'python',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  Go: 'go',
  Rust: 'rust',
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const lang = languageMap[language] || 'plaintext'

  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #30363d',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          backgroundColor: '#161b22',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28CA42' }} />
          </div>
          <span
            style={{
              fontSize: '12px',
              color: '#8b949e',
              fontFamily: "'JetBrains Mono', monospace",
              marginLeft: '8px',
            }}
          >
            {language}
          </span>
        </div>
        <span
          style={{
            fontSize: '11px',
            color: '#484f58',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {code.split('\n').length} lines
        </span>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={lang}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '20px',
          backgroundColor: '#0d1117',
          fontSize: '13px',
          lineHeight: '1.7',
          fontFamily: "'JetBrains Mono', monospace",
        }}
        showLineNumbers
        lineNumberStyle={{
          color: '#484f58',
          fontSize: '12px',
          paddingRight: '16px',
          minWidth: '2em',
          userSelect: 'none',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
