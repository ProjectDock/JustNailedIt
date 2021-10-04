import './CodeContent.css';

const CodeContent = ({code}) => {
  return(
    <pre className="code__format code__multi-line">
      {code}
    </pre>
  )
}

export default CodeContent;