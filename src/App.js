import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;


/*

ISSUES:
1. Responsive design for desktop

LEARNINGS:
1. Color theme switching
2. useEffect() alternative for updating variables
3. Drag and drop elements

*/