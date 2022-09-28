import './App.css';
import logo from './assets/github_logo.png'

function App() {
  return (
    <div className="header-container">
      <div className='header'>
        <div className='header-section1'>
          <img className='logo' src={logo}></img>
          <input type='text' placeholder='Search or jump to...'></input>
          <a href="/">Pull Requests</a>
          <a href="/">Issues</a>
          <a href="/">Marketplace</a>
          <a href="/">Explore</a>
        </div>

        <div className='header-section2'>
          {/* notification bell icon */}
          {/* dropdown icon */}
          {/* profile image */}
        </div>
      </div>
    </div>
  );
}

export default App;
