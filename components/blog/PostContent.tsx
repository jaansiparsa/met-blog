import { QuoteBlock } from './QuoteBlock'
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  content: string
}

// Custom component to render blockquotes as QuoteBlock
// ol/ul get list styles so numbers and bullets show (Tailwind preflight resets them)
const components = {
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal pl-8 list-outside">{children}</ol>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc pl-8 list-outside">{children}</ul>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => {
    // Extract text from React nodes
    const extractText = (node: React.ReactNode): string => {
      if (typeof node === 'string') return node
      if (typeof node === 'number') return String(node)
      if (Array.isArray(node)) return node.map(extractText).join('')
      if (node && typeof node === 'object' && 'props' in node) {
        return extractText((node as { props: { children?: React.ReactNode } }).props.children)
      }
      return ''
    }
    
    const text = extractText(children).trim()
    
    // Check if it matches our quote format: "quote text" — Author
    // Handles both straight and curly quotes, multiline with [\s\S] instead of 's' flag
    const quoteMatch = text.match(/^[""'']([\s\S]+?)[""''][\s\n]*—[\s\n]*(.+)$/)
    
    if (quoteMatch) {
      return (
        <QuoteBlock
          quote={quoteMatch[1].trim()}
          author={quoteMatch[2].trim()}
        />
      )
    }
    
    // Fallback to regular blockquote
    return (
      <blockquote className="border-l-4 border-[#FDB515] pl-6 py-2 my-4 italic text-gray-700">
        {children}
      </blockquote>
    )
  },
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}

