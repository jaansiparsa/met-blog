interface StickyNoteProps {
    children: React.ReactNode
    rotation?: number
    color?: 'yellow' | 'gold'
    className?: string
  }
  
  export function StickyNote({ children, rotation = 0, color = 'yellow', className = '' }: StickyNoteProps) {
    const bgColor = color === 'yellow' ? 'bg-yellow-200' : 'bg-[#FDB515]'
    
    return (
      <div className={`relative ${className}`}>
      <div 
        className={`${bgColor} px-6 py-3 rounded-none`}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
          {children}
        </div>
        {/* Tape strips */}
        <div className="absolute -top-1 left-4 w-8 h-3 bg-gray-300/50"></div>
        <div className="absolute -top-1 right-4 w-8 h-3 bg-gray-300/50"></div>
      </div>
    )
  }