import githubLogo from '../assets/github.png';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right page-footer__github-link" href="https://github.com/Antibreez/react-movies">
          Repo
          <img src={githubLogo} alt="github" />
        </a>
        </div>
      </div>
    </footer>
      
  )
}

export {Footer};