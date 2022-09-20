const Hyperlink = ({ baseText, urlText, url, xl = false }: { baseText: string, urlText: string, url: string, xl?: boolean }) => (
  <p className={`${xl && 'text-xl'} text-black dark:text-white`}>
      {baseText} {" "} 
      <a
        href={url}
        target="_blank"
        className="underline text-blue-500"
        rel="noopener noreferrer"
      >
        {urlText}
      </a>
    </p>
)
  
export default Hyperlink