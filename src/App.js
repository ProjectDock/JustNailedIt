import './App.css';
import content from './CONTRIBUTE_HERE/content';
import Card from './Card/Card';

const App = () => {

  const readContent = (code) => {
    const content = require(`./CONTRIBUTE_HERE/codes/${code}`)
    return content.code;
  }

  return(
    <div className="App">

      <header className="site__header">

        <div className="site__header--title">Just nailed it, mate!</div>

        <span>
          Photo by <a
          href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Florian Olivo</a>
        </span>
      </header>

      <section className="site__content">
        {
          content.map(item => (
            <Card
              name={item.name}
              codeFile={readContent(item.codeFile)}
              github={item.github}
            />
          ))
        }

      </section>

      <footer>
        <div className="footer-content">
          <p>
            Copyright © {new Date().getFullYear()} ProjectDock. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App;
