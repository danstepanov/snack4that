const Hyperlink = ({ baseText, urlText, url }: { baseText: string, urlText: string, url: string }) => (
    <p className="text-slate-900 dark:text-white">
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