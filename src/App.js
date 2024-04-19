import './App.css';
import './styles/Footer.css'
import './styles/Main.css'
import './styles/Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import MainComponent from './components/MainComponent.js';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
