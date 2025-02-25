import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          {/* Navigation will go here */}
        </nav>
        
        {children}
        
        <footer>
          {/* Footer will go here */}
        </footer>
      </body>
    </html>
  )
}