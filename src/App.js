import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}

export default App;


/*

COMPONENT LAYERING
- App (container)
  - Header (title + toggle + add task)
  - Body (task list + task actions + reorder line)
  - Footer (attribution)
*/