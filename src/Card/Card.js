import './Card.css'
import CodeContent from '../CodeContent/CodeContent'

const Card = ({name, title, codeFile, github}) => {
    return(
        <div className="card--container">

          <CodeContent code={codeFile} />

            <div className="card--description">
                <h2>{name}</h2>
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer">
                <div className="card--github" />
            </a>

        </div>
    )
}

export default Card