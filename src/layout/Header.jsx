import githubLogo from '../assets/github.png';

function Header() {
  return (
    <nav className="purple lighten-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Antibreez/react-movies" className="page-header__github-link">
              View on Github
              <img src={githubLogo} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export {Header};