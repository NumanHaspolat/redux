import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  // const store = createStore(counterReducer); //? icrisine bir reducer yazilmalidir.
  return (
    <div className="App">
      {/* Store ile sarmalandi */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
