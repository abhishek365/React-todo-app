import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoContextProvider from "./store/todoStore";

const App = () => {
  return (
    <>
      <TodoContextProvider>
        <div className=" todo-container container text-center">
          <AppName />
          <AppTodo />
          <TodoItems />
          <WelcomeMessage />
        </div>
      </TodoContextProvider>
    </>
  );
};

export default App;
