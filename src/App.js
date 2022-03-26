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
1. When filter aside from all = selected, clicking on task 
doesn't reflect on display
2. Beyond a certain string length, radio button deforms
*/