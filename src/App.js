import './App.css';
import theme from "./images/icon-sun.svg";
import deleteIcon from "./images/icon-cross.svg";

function App() {
  return (
    <div className="appTest">
      <header className="header">
        <h1 className="title">
          TODO
        </h1>
        <button className="theme">
          <img 
            className="theme__img"
            src={theme}
            alt="Sun"
          />
        </button>
      </header>
      <main className="list">
        <form>
          <label>
            <button />
            <input 
            type="text" 
            placeholder="Create a new todo..."
            />
          </label>
        </form>
        <ul>
          <li>
            <label>
              <input 
                type="checkbox"
              />
              <p>
                Task
              </p>
              <button>
                <img
                  src={deleteIcon}
                  alt="delete"
                />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input 
                type="checkbox"
              />
              <p>
                Task
              </p>
              <button>
                <img
                  src={deleteIcon}
                  alt="delete"
                />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input 
                type="checkbox"
              />
              <p>
                Task
              </p>
              <button>
                <img
                  src={deleteIcon}
                  alt="delete"
                />
              </button>
            </label>
          </li>
          <li>
            <p>
              3 items left
            </p>
            <p>
              Clear completed
            </p>
          </li>
        </ul>
        <section>
          <button>
            All
          </button>
          <button>
            Active
          </button>
          <button>
            Completed
          </button>
        </section>
        <section>
          Drag and drop to reorder list
        </section>
      </main>
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