import './App.css';
import logo from "./static/logo深色.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">候選人主張</a></li>
            <li><a href="#">最新活動</a></li>
            <li><a href="#">政策議題</a></li>
            <li><a href="#">民眾服務信箱</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
